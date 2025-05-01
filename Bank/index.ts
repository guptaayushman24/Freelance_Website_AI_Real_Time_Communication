import {PrismaClient} from '../freelance_ai/db/generated/prisma'
const express = require('express');
const cors = require('cors');
const client = new PrismaClient();
const app = express();

const PORT = 5001;
app.use(cors({
    origin:'http://localhost:3000',
    credentials:true
}));

app.use(express.json());
app.get('/',(req:any,res:any)=>{
    return res.json({
        'msg':'Hello'
    })
})

app.post('/addmoneytowallet',async(req:any,res:any)=>{
    const body = req.body;
    if (!body.amount || !body.accountnumber){
        return res.json({
            'msg':'Please enter amount and accountnumber'
        })
    }

    const userbankbalance = await client.bankSchema.findMany({
        where:{
            accountnumber:body.accountnumber
        },
    })

   
        if (Number (body.amount)>Number(userbankbalance[0].amount)){
            console.log("Error caught");
            console.log("User balance",userbankbalance[0].amount);
            return res.json({
                'msg':'Insufficent Balance'
            })
        }
   
    // User wallet amount
    const userwalletamount = await client.walletSchema.findMany({
        where:{
            accountnumber:body.accountnumber
        }
    })
    await client.$transaction(async(tx)=>{
        const bank = await tx.bankSchema.findUnique({
            where:{
                accountnumber:body.accountnumber
            }
        });
        const wallet = await tx.walletSchema.findUnique({
            where:{
                accountnumber:body.accountnumber
            }
        });

        if (!bank || !wallet){
            throw new Error("Wrong account number or account number does not exist");
        }
        if (Number(body.amount)>Number(bank?.amount)){
            throw new Error("Insufficient balance");
        }

        await tx.bankSchema.update({
            where:{
                accountnumber:bank?.accountnumber
            },
            data:{
                amount:String(Number(bank?.amount)-Number(body.amount))
            }
        })

        await tx.walletSchema.update({
            where:{
                accountnumber:body.accountnumber
            },
            data:{
                amount:String(Number(wallet?.amount)+Number(body.amount))
            }
        })

        
    })
    return res.json({
        "msg":`Transaction done for the account number ${body.accountnumber}`
    })

    
})

app.post('/addmoneytobank',(req:any,res:any)=>{
    const body = req.body;
    if (!body.accountnumber || !body.amount){
        return res.json({
            'msg':'Accountnumber or amount is missing'
        })
    }
    const transaction  = client.$transaction(async(tx)=>{
        const userwalletbalance = await tx.walletSchema.findUnique({
            where:{
                accountnumber:body.accountnumber
            }
        })
        const userbankbalance = await tx.bankSchema.findUnique({
            where:{
                accountnumber:body.accountnumber
            }
        })

        if (!userwalletbalance || !userbankbalance){
            throw new Error("Wrong account number or account number does not exist");
        }
        if (Number(body.amount)>Number(userwalletbalance?.amount)){
            throw new Error("Insufficient balance in the wallet");
        }


        await tx.bankSchema.update({
            where:{
                accountnumber:body.accountnumber
            },
            data:{
                amount:String (Number (userbankbalance?.amount)+Number (body.amount))
            }
        })

        await tx.walletSchema.update({
            where:{
                accountnumber:body.accountnumber
            },
            data:{
                amount:String (Number(userwalletbalance?.amount)-Number (body.amount))
            }
        })
        
    })
    return res.json({
        "msg":`Transaction done for the account number ${body.accountnumber}`
    })
})
app.listen(PORT,()=>{
    console.log("Bank server is running on",PORT);
})
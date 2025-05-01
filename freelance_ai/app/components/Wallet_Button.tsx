export default function WalletButton(){
    return(
        <div className="flex flex-col gap-4 mt-6 w-[50%] ml-[8rem]">
             <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Generate unique id
          </button>
      
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Create Wallet
          </button>
        </div>
    )
}
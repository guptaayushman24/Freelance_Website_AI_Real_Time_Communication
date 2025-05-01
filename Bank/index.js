"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_1 = require("../freelance_ai/db/generated/prisma");
var express = require('express');
var cors = require('cors');
var client = new prisma_1.PrismaClient();
var app = express();
var PORT = 5001;
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(express.json());
app.get('/', function (req, res) {
    return res.json({
        'msg': 'Hello'
    });
});
app.post('/addmoneytowallet', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var body, userbankbalance, userwalletamount;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                body = req.body;
                if (!body.amount || !body.accountnumber) {
                    return [2 /*return*/, res.json({
                            'msg': 'Please enter amount and accountnumber'
                        })];
                }
                return [4 /*yield*/, client.bankSchema.findMany({
                        where: {
                            accountnumber: body.accountnumber
                        },
                    })];
            case 1:
                userbankbalance = _a.sent();
                if (Number(body.amount) > Number(userbankbalance[0].amount)) {
                    console.log("Error caught");
                    console.log("User balance", userbankbalance[0].amount);
                    return [2 /*return*/, res.json({
                            'msg': 'Insufficent Balance'
                        })];
                }
                return [4 /*yield*/, client.walletSchema.findMany({
                        where: {
                            accountnumber: body.accountnumber
                        }
                    })];
            case 2:
                userwalletamount = _a.sent();
                return [4 /*yield*/, client.$transaction(function (tx) { return __awaiter(void 0, void 0, void 0, function () {
                        var bank, wallet;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, tx.bankSchema.findUnique({
                                        where: {
                                            accountnumber: body.accountnumber
                                        }
                                    })];
                                case 1:
                                    bank = _a.sent();
                                    return [4 /*yield*/, tx.walletSchema.findUnique({
                                            where: {
                                                accountnumber: body.accountnumber
                                            }
                                        })];
                                case 2:
                                    wallet = _a.sent();
                                    if (!bank || !wallet) {
                                        throw new Error("Wrong account number or account number does not exist");
                                    }
                                    if (Number(body.amount) > Number(bank === null || bank === void 0 ? void 0 : bank.amount)) {
                                        throw new Error("Insufficient balance");
                                    }
                                    return [4 /*yield*/, tx.bankSchema.update({
                                            where: {
                                                accountnumber: bank === null || bank === void 0 ? void 0 : bank.accountnumber
                                            },
                                            data: {
                                                amount: String(Number(bank === null || bank === void 0 ? void 0 : bank.amount) - Number(body.amount))
                                            }
                                        })];
                                case 3:
                                    _a.sent();
                                    return [4 /*yield*/, tx.walletSchema.update({
                                            where: {
                                                accountnumber: body.accountnumber
                                            },
                                            data: {
                                                amount: String(Number(wallet === null || wallet === void 0 ? void 0 : wallet.amount) + Number(body.amount))
                                            }
                                        })];
                                case 4:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            case 3:
                _a.sent();
                return [2 /*return*/, res.json({
                        "msg": "Transaction done for the account number ".concat(body.accountnumber)
                    })];
        }
    });
}); });
app.post('/addmoneytobank', function (req, res) {
    var body = req.body;
    if (!body.accountnumber || !body.amount) {
        return res.json({
            'msg': 'Accountnumber or amount is missing'
        });
    }
    var transaction = client.$transaction(function (tx) { return __awaiter(void 0, void 0, void 0, function () {
        var userwalletbalance, userbankbalance;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, tx.walletSchema.findUnique({
                        where: {
                            accountnumber: body.accountnumber
                        }
                    })];
                case 1:
                    userwalletbalance = _a.sent();
                    return [4 /*yield*/, tx.bankSchema.findUnique({
                            where: {
                                accountnumber: body.accountnumber
                            }
                        })];
                case 2:
                    userbankbalance = _a.sent();
                    if (!userwalletbalance || !userbankbalance) {
                        throw new Error("Wrong account number or account number does not exist");
                    }
                    if (Number(body.amount) > Number(userwalletbalance === null || userwalletbalance === void 0 ? void 0 : userwalletbalance.amount)) {
                        throw new Error("Insufficient balance in the wallet");
                    }
                    return [4 /*yield*/, tx.bankSchema.update({
                            where: {
                                accountnumber: body.accountnumber
                            },
                            data: {
                                amount: String(Number(userbankbalance === null || userbankbalance === void 0 ? void 0 : userbankbalance.amount) + Number(body.amount))
                            }
                        })];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, tx.walletSchema.update({
                            where: {
                                accountnumber: body.accountnumber
                            },
                            data: {
                                amount: String(Number(userwalletbalance === null || userwalletbalance === void 0 ? void 0 : userwalletbalance.amount) - Number(body.amount))
                            }
                        })];
                case 4:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    return res.json({
        "msg": "Transaction done for the account number ".concat(body.accountnumber)
    });
});
app.listen(PORT, function () {
    console.log("Bank server is running on", PORT);
});

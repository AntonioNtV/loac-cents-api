"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var yup_1 = require("yup");
var AppError_1 = __importDefault(require("../errors/AppError"));
function errorHandlerMiddleware(error, request, response, _) {
    if (error instanceof AppError_1.default) {
        return response.status(error.statusCode).json({
            status: 'error',
            message: error.message,
        });
    }
    if (error instanceof yup_1.ValidationError) {
        return response.status(400).json({
            status: 'error',
            message: error.message,
        });
    }
    console.error(error);
    return response.status(500).json({
        status: 'error',
        message: 'Internal server error',
    });
}
exports.default = errorHandlerMiddleware;

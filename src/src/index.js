require('dotenv').config();
import connectDB from "./db/index"
import express from "express";


const app =express();


connectDB();
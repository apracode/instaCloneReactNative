import { nouns, adjectives } from "./words";
import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";
import jwt from "jsonwebtoken";
import "./env";

export const secretGenerator = () => {
  const randomNumber = Math.floor(Math.random() * 500);
  console.log(randomNumber);
  return `${adjectives[randomNumber]} ${nouns[randomNumber]}`;
};

export const sendMail = (email) => {
  const options = {
    auth: {
      api_user: process.env.SENDGRID_USERNAME,
      api_key: process.env.SENDGRID_PASSWORD,
    },
  };

  const client = nodemailer.createTransport(sgTransport(options));
  return client.sendMail(email);
};

export const sendSecterMail = (address, secret) => {
  const email = {
    from: "annaprilipko13@gmail.com",
    to: address,
    subject: "Email confirmation",
    html: `Hello! Your login secret is <b>${secret}</b>.<br> Copy past it on the app to log in.`,
  };
  return sendMail(email);
};

export const genereteToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET);

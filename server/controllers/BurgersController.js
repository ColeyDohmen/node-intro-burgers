import express from "express";
import BaseController from "../utils/BaseController";
import { valuesService } from "../services/ValueService";
import { burgersService } from "../services/BurgersService";

export class BurgersController extends BaseController {
  constructor() {
    super("api/burgers");
    this.router
      .get("", this.getAll)
      .post("", this.create);
  }
  async getAll(req, res, next) {
    try {
      const burgers = burgersService.getAll()
      return res.send(burgers);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      res.send(req.body);
    } catch (error) {
      next(error);
    }
  }
}

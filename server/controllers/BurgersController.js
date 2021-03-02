import express from "express";
import BaseController from "../utils/BaseController";
import { valuesService } from "../services/ValueService";
import { burgersService } from "../services/BurgersService";

export class BurgersController extends BaseController {
  constructor() {
    super("api/burgers");
    this.router
      .get("", this.getAll)
      .post("", this.create)
      .delete("/:id", this.delete)
      .put("/:id", this.edit)
  }
  async getAll(req, res, next) {
    try {
      const burgers = burgersService.getAll()
      return res.send(burgers);
    } catch (error) {
      next(error);
    }
  }

  async edit (req, res, next){
    try{
      let editedBurger = req.body
      const burger = burgersService.edit(editedBurger, req.params.id)
      res.send(burger)
    
    }
    catch (error){
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      let rawBurger = req.body 
      const burger = burgersService.create(rawBurger)
      res.status(201).send({data:burger})
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const id = req.params.id
      burgersService.delete(id)
      res.send("DELETED")
    } catch (error) {
      next(error)
    }
  }
}

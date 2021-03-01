import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";
import { BurgerDB } from "../db/BurgerDB"

class BurgersService {

    getAll(){
        return BurgerDB.burgers
    }
  async find(query={}) {
    let values = await dbContext.Values.find(query);
    return values;
  }
  async findById(id) {
    let value = await dbContext.Values.findById(id);
    if (!value) {
      throw new BadRequest("Invalid Id");
    }
    return value;
  }
}

export const burgersService = new BurgersService();
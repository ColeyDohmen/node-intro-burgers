import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";
import { BurgerDB } from "../db/BurgerDB"

let id = 4
class BurgersService {

    getAll(){
        return BurgerDB.burgers
    }

    create(rawBurger) {
        rawBurger.id = id++
        BurgerDB.burgers.push(rawBurger)
        return rawBurger
    }

    delete(id) {
        findBurger(id)
        BurgerDB.burgers = BurgerDB.burgers.filter(b => b.id != id)
    }

    edit(editedBurger, id){
        const foundBurger = findBurger(id)
        Object.keys(editedBurger).forEach(key =>{
            foundBurger[key] = editedBurger[key]
        })
return foundBurger
    }

}

function findBurger(id){
    let foundBurger = BurgerDB.burgers.find(b => b.id == id)
    if (!foundBurger) {throw new Error ("INVALID ID, TRY AGAIN")}
    return foundBurger
}

export const burgersService = new BurgersService();
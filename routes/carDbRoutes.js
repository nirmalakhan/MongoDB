const carRouter = require("express").Router();

let Car = require("../model/car");

//
carRouter.get("/getall", async (request, response) => {
  const cars = await Car.find({});
  response.send(cars);
});

carRouter.post("/add", async (request, response) => {
  const newCar = new Car(request.body);
  const car = await newCar.save();
  response.send(car);
});

carRouter.put("/update/:id", async (request, response) => {
  const id = request.params.id;
  const { name, isElectric, modelYear, seater } = request.body;
  const car = await Car.findByIdAndUpdate(id, {
    name,
    isElectric,
    modelYear,
    seater,
  });
  response.send(car);
});

carRouter.delete("/remove/:id", async (request, response) => {
  const id = request.params.id;
  const car = await Car.findByIdAndRemove(id);
  response.send(car);
});

module.exports = carRouter;

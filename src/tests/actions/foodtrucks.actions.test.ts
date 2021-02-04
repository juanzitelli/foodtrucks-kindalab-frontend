import React from "react";
import { FoodTruckReducerTypes } from "../../redux/reducers/foodtrucks.reducer";
import { FoodTruck } from "../../types/FoodTruck";
import { foodTrucksFetched } from "./../../redux/actions/foodtrucks.actions";
describe("Tests on FoodTrucks actions", () => {
  test("foodTrucksFetched should create an appropiate action object", () => {
    const testFoodTruck: FoodTruck = {
      objectid: "934620",
      applicant: "May Catering",
      facilitytype: "Truck",
      cnn: "9050000",
      locationdescription: "MINNA ST: 10TH ST to 11TH ST (900 - 999)",
      address: "911 MINNA ST",
      blocklot: "3510043",
      block: "3510",
      lot: "043",
      permit: "17MFF-0110",
      status: "EXPIRED",
      fooditems:
        "Cold Truck: Sandwiches: fruit: snacks: candy: hot and cold drinks",
      x: "6008034.46",
      y: "2110104.285",
      latitude: "37.7743980109403",
      longitude: "-122.415658655811",
      schedule:
        "http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&		report=rptSchedule&params=permit=17MFF-0110&ExportPDF=1&		Filename=17MFF-0110_schedule.pdf",
      dayshours: "Mo-Fr:8PM-9PM",
      approved: new Date("2017-12-28T00:00:00.000"),
      received: "2017-02-13",
      priorpermit: "1",
      expirationdate: new Date("2018-07-15T00:00:00.000"),
      location: {
        latitude: "37.7743980109403",
        longitude: "-122.415658655811",
        human_address: '{"address": "", "city": "", "state": "", "zip": ""}',
      },
      ":@computed_region_yftq_j783": "8",
      ":@computed_region_p5aj_wyqh": "2",
      ":@computed_region_rxqg_mtj9": "9",
      ":@computed_region_bh8s_q3mv": "28853",
      ":@computed_region_fyvs_ahh9": "34",
    };
    const testFoodTrucks = [testFoodTruck];

    expect(foodTrucksFetched(testFoodTrucks)).toEqual({
      type: FoodTruckReducerTypes.FoodTrucksFetched,
      payload: testFoodTrucks,
    });
  });
});

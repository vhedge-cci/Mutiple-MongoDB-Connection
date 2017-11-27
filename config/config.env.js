/*
  Description : Add all the app related configuration data in this file. DO NOT ADD project functionality specific settings here.
  Note :
  Important links :
*/

module.exports = {
    ports: [9000],
    //Database Configs
    mongoUrl: "mongodb://localhost:27017/khabari",
    mongoUrlWarehouse: "mongodb://localhost:27017/adManager",
    mongoUrlWarehouse2: "mongodb://localhost:27017/Dept_Blocking_DB",
    dataLimit: "50mb",
    envDevelopment: "development"
};

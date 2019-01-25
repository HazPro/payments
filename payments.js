var ObjectID = require('bson-objectid');

module.exports = {
  "localhost:27017": {
    "databases": {
      "myproject%60": {
        "collections": [
          {
            "name": "system.namespaces",
            "documents": [
              {
                "name": "system.indexes"
              }
            ]
          },
          {
            "name": "system.indexes",
            "documents": []
          }
        ]
      },
      "ksu": {
        "collections": [
          {
            "name": "system.namespaces",
            "documents": [
              {
                "name": "system.indexes"
              },
              {
                "name": "payments"
              },
              {
                "name": "report_dayli_organization"
              },
              {
                "name": "report_month_organization"
              },
              {
                "name": "report_year_organization"
              },
              {
                "name": "report_slice_dayli_organization"
              },
              {
                "name": "report_slice_month_organization"
              },
              {
                "name": "report_slice_year_organization"
              },
              {
                "name": "balance"
              }
            ]
          },
          {
            "name": "system.indexes",
            "documents": [
              {
                "v": 1,
                "key": {
                  "_id": 1
                },
                "ns": "ksu.payments",
                "name": "_id_",
                "unique": true
              },
              {
                "v": 1,
                "key": {
                  "_id": 1
                },
                "ns": "ksu.report_dayli_organization",
                "name": "_id_",
                "unique": true
              },
              {
                "v": 1,
                "key": {
                  "_id": 1
                },
                "ns": "ksu.report_month_organization",
                "name": "_id_",
                "unique": true
              },
              {
                "v": 1,
                "key": {
                  "_id": 1
                },
                "ns": "ksu.report_year_organization",
                "name": "_id_",
                "unique": true
              },
              {
                "v": 1,
                "key": {
                  "_id": 1
                },
                "ns": "ksu.report_slice_dayli_organization",
                "name": "_id_",
                "unique": true
              },
              {
                "v": 1,
                "key": {
                  "_id": 1
                },
                "ns": "ksu.report_slice_month_organization",
                "name": "_id_",
                "unique": true
              },
              {
                "v": 1,
                "key": {
                  "_id": 1
                },
                "ns": "ksu.report_slice_year_organization",
                "name": "_id_",
                "unique": true
              },
              {
                "v": 1,
                "key": {
                  "_id": 1
                },
                "ns": "ksu.balance",
                "name": "_id_",
                "unique": true
              }
            ]
          },
          {
            "name": "payments",
            "documents": [
              {
                "from": {
                  "personalAccount": "1"
                },
                "to": {
                  "personalAccount": "2"
                },
                "operator": {
                  "personalAccount": "3"
                },
                "total": 323,
                "stamp": "2019-01-24T09:04:47.556Z",
                "_id": ObjectID("5c497faf5339e34feda914ec")
              },
              {
                "from": {
                  "personalAccount": "4"
                },
                "to": {
                  "personalAccount": "2"
                },
                "operator": {
                  "personalAccount": "5"
                },
                "total": 323.2,
                "stamp": "2019-01-24T09:04:50.188Z",
                "_id": ObjectID("5c497fb25339e34feda914f7")
              }
            ]
          },
          {
            "name": "report_dayli_organization",
            "documents": [
              {
                "value": 646.2,
                "organization": {
                  "personalAccount": "2"
                },
                "stamp": "2019-0-24",
                "_id": ObjectID("5c497fb05339e34feda914ed")
              },
              {
                "value": 323,
                "organization": {
                  "personalAccount": "3"
                },
                "stamp": "2019-0-24",
                "_id": ObjectID("5c497fb05339e34feda914f0")
              },
              {
                "value": 323.2,
                "organization": {
                  "personalAccount": "5"
                },
                "stamp": "2019-0-24",
                "_id": ObjectID("5c497fb25339e34feda914f8")
              }
            ]
          },
          {
            "name": "report_month_organization",
            "documents": [
              {
                "value": 646.2,
                "organization": {
                  "personalAccount": "2"
                },
                "stamp": "2019-0",
                "_id": ObjectID("5c497fb05339e34feda914ee")
              },
              {
                "value": 323,
                "organization": {
                  "personalAccount": "3"
                },
                "stamp": "2019-0",
                "_id": ObjectID("5c497fb05339e34feda914f1")
              },
              {
                "value": 323.2,
                "organization": {
                  "personalAccount": "5"
                },
                "stamp": "2019-0",
                "_id": ObjectID("5c497fb25339e34feda914f9")
              }
            ]
          },
          {
            "name": "report_year_organization",
            "documents": [
              {
                "value": 646.2,
                "organization": {
                  "personalAccount": "2"
                },
                "stamp": "2019",
                "_id": ObjectID("5c497fb05339e34feda914ef")
              },
              {
                "value": 323,
                "organization": {
                  "personalAccount": "3"
                },
                "stamp": "2019",
                "_id": ObjectID("5c497fb05339e34feda914f2")
              },
              {
                "value": 323.2,
                "organization": {
                  "personalAccount": "5"
                },
                "stamp": "2019",
                "_id": ObjectID("5c497fb35339e34feda914fa")
              }
            ]
          },
          {
            "name": "report_slice_dayli_organization",
            "documents": [
              {
                "value": 323,
                "organization1": {
                  "personalAccount": "2"
                },
                "organization2": {
                  "personalAccount": "3"
                },
                "stamp": "2019-0-24",
                "_id": ObjectID("5c497fb15339e34feda914f3")
              },
              {
                "value": 323.2,
                "organization1": {
                  "personalAccount": "2"
                },
                "organization2": {
                  "personalAccount": "5"
                },
                "stamp": "2019-0-24",
                "_id": ObjectID("5c497fb35339e34feda914fb")
              }
            ]
          },
          {
            "name": "report_slice_month_organization",
            "documents": [
              {
                "value": 323,
                "organization1": {
                  "personalAccount": "2"
                },
                "organization2": {
                  "personalAccount": "3"
                },
                "stamp": "2019-0",
                "_id": ObjectID("5c497fb15339e34feda914f4")
              },
              {
                "value": 323.2,
                "organization1": {
                  "personalAccount": "2"
                },
                "organization2": {
                  "personalAccount": "5"
                },
                "stamp": "2019-0",
                "_id": ObjectID("5c497fb35339e34feda914fc")
              }
            ]
          },
          {
            "name": "report_slice_year_organization",
            "documents": [
              {
                "value": 323,
                "organization1": {
                  "personalAccount": "2"
                },
                "organization2": {
                  "personalAccount": "3"
                },
                "stamp": "2019",
                "_id": ObjectID("5c497fb15339e34feda914f5")
              },
              {
                "value": 323.2,
                "organization1": {
                  "personalAccount": "2"
                },
                "organization2": {
                  "personalAccount": "5"
                },
                "stamp": "2019",
                "_id": ObjectID("5c497fb35339e34feda914fd")
              }
            ]
          },
          {
            "name": "balance",
            "documents": [
              {
                "value": 323,
                "payer": {
                  "personalAccount": "1"
                },
                "_id": ObjectID("5c497fb25339e34feda914f6")
              },
              {
                "value": 323.2,
                "payer": {
                  "personalAccount": "4"
                },
                "_id": ObjectID("5c497fb35339e34feda914fe")
              }
            ]
          }
        ]
      }
    }
  }
}
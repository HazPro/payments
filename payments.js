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
                "name": "payment_history"
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
                "ns": "ksu.payment_history",
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
                "stamp": "2019-01-31T10:03:19.197Z",
                "paymentType": "incoming",
                "_id": ObjectID("5c52c7e790dfdb8d3296b34b")
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
                "stamp": "2019-01-31T10:03:22.540Z",
                "paymentType": "incoming",
                "_id": ObjectID("5c52c7ea90dfdb8d3296b357")
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
                "stamp": "2019-0-31",
                "_id": ObjectID("5c52c7e790dfdb8d3296b34c")
              },
              {
                "value": 323,
                "organization": {
                  "personalAccount": "3"
                },
                "stamp": "2019-0-31",
                "_id": ObjectID("5c52c7e890dfdb8d3296b34f")
              },
              {
                "value": 323.2,
                "organization": {
                  "personalAccount": "5"
                },
                "stamp": "2019-0-31",
                "_id": ObjectID("5c52c7eb90dfdb8d3296b358")
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
                "_id": ObjectID("5c52c7e790dfdb8d3296b34d")
              },
              {
                "value": 323,
                "organization": {
                  "personalAccount": "3"
                },
                "stamp": "2019-0",
                "_id": ObjectID("5c52c7e990dfdb8d3296b350")
              },
              {
                "value": 323.2,
                "organization": {
                  "personalAccount": "5"
                },
                "stamp": "2019-0",
                "_id": ObjectID("5c52c7eb90dfdb8d3296b359")
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
                "_id": ObjectID("5c52c7e890dfdb8d3296b34e")
              },
              {
                "value": 323,
                "organization": {
                  "personalAccount": "3"
                },
                "stamp": "2019",
                "_id": ObjectID("5c52c7e990dfdb8d3296b351")
              },
              {
                "value": 323.2,
                "organization": {
                  "personalAccount": "5"
                },
                "stamp": "2019",
                "_id": ObjectID("5c52c7ec90dfdb8d3296b35a")
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
                "stamp": "2019-0-31",
                "_id": ObjectID("5c52c7e990dfdb8d3296b352")
              },
              {
                "value": 323.2,
                "organization1": {
                  "personalAccount": "2"
                },
                "organization2": {
                  "personalAccount": "5"
                },
                "stamp": "2019-0-31",
                "_id": ObjectID("5c52c7ec90dfdb8d3296b35b")
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
                "_id": ObjectID("5c52c7e990dfdb8d3296b353")
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
                "_id": ObjectID("5c52c7ec90dfdb8d3296b35c")
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
                "_id": ObjectID("5c52c7ea90dfdb8d3296b354")
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
                "_id": ObjectID("5c52c7ec90dfdb8d3296b35d")
              }
            ]
          },
          {
            "name": "payment_history",
            "documents": [
              {
                "history": [
                  {
                    "document": {
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
                      "stamp": {},
                      "paymentType": "incoming",
                      "_id": {
                        "id": "\\RÇçßÛ2³K"
                      }
                    },
                    "totalBalance": 323
                  }
                ],
                "from.personalAccount": "1",
                "_id": ObjectID("5c52c7ea90dfdb8d3296b355")
              },
              {
                "history": [
                  {
                    "document": {
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
                      "stamp": {},
                      "paymentType": "incoming",
                      "_id": {
                        "id": "\\RÇêßÛ2³W"
                      }
                    },
                    "totalBalance": 323.2
                  }
                ],
                "from.personalAccount": "4",
                "_id": ObjectID("5c52c7ec90dfdb8d3296b35e")
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
                "_id": ObjectID("5c52c7ea90dfdb8d3296b356")
              },
              {
                "value": 323.2,
                "payer": {
                  "personalAccount": "4"
                },
                "_id": ObjectID("5c52c7ec90dfdb8d3296b35f")
              }
            ]
          }
        ]
      }
    }
  }
}
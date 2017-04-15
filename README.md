# Fahrplan Node

This module was meant to wrapper the api http://data.deutschebahn.com/dataset/api-fahrplan.

```js
const fahrplan = require('fahrplan-node');
```

| Methods                                            |           returns               |                         description                       |
|----------------------------------------------------|---------------------------------|-----------------------------------------------------------|
| getDepartureBoardAsJson('string', 'string', 'date')| `=> Promise<Definition>`        | Gets departure board from a specific stop as json         |
| getDepartureBoardAsXml('string', 'string', 'date') | `=> Promise<Definition>`        | Gets departure board from a specific stop as xml          |
| journeyDetail('string')                            | `=> Promise<Definition>`        | Gets journey detail| using the reference passed           |

## Example output

*NOTE: `fahrplan.journeyDetail(journeyDetailRef)` the kind output of this method depends of the journey reference passed (json or xml)*

```js
  {
"DepartureBoard":{
  "noNamespaceSchemaLocation":"https://open-api.bahn.de/bin/rest.exe/v1.0/xsd?name=hafasRestDepartureBoard.xsd",
  "Departure":[{
    "name":"ICE 1033",
    "tyte":"ICE",
    "stopid":"8000199",
    "stop":"Kiel Hbf",
    "time":"06:13",
    "date":"2017-04-14",
    "direction":"Stuttgart Hbf",
    "track":"3",
    "JourneyDetailRef":{
      "ref":"https://open-api.bahn.de/bin/rest.exe/v1.0/journeyDetail?ref=581025%2F194018%2F304252%2F41549%2F80%3Fdate%3D2017-04-14%26station_evaId%3D8000199%26station_type%3Ddep%26authKey%3DDBhackFrankfurt0316%26lang%3Dde%26format%3Djson%26"
      }
    },{
    "name":"ICE 1273",
    "tyte":"ICE",
    "stopid":"8000199",
    "stop":"Kiel Hbf",
    "time":"07:13",
    "date":"2017-04-14",
    "direction":"Zürich HB",
    "track":"3",
    "JourneyDetailRef":{
      "ref":"https://open-api.bahn.de/bin/rest.exe/v1.0/journeyDetail?ref=999717%2F343413%2F99034%2F283722%2F80%3Fdate%3D2017-04-14%26station_evaId%3D8000199%26station_type%3Ddep%26authKey%3DDBhackFrankfurt0316%26lang%3Dde%26format%3Djson%26"
      }
 ...]
 }
```
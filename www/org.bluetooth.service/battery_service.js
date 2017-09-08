 /*
    Copyright 2013-2014, JUMA Technology

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/
			
		var BC = require("org.bcsphere.bluetooth.bcjs");
		
		var BatteryLevelService = BC.BatteryLevelService = BC.Service.extend({

			   /* org.bluetooth.characteristic.battery_level*/
			   characteristicUUID:'2a19',

			   getValue : function(callback){
				this.discoverCharacteristics(function(){
					this.getCharacteristicByUUID(this.characteristicUUID)[0].read(function(data){
						 callback(data.value);
					});
				});
			   },
			
			   notify : function(callback){
				this.discoverCharacteristics(function(){
					this.getCharacteristicByUUID(this.characteristicUUID)[0].subscribe(function(data){
						callback(data.value);
					});
				});
			},

		});
		
		document.addEventListener('bccoreready',function(){
			BC.bluetooth.UUIDMap["0000180f-0000-1000-8000-00805f9b34fb"] = BC.BatteryLevelService;
		});
		
		module.exports = BC;

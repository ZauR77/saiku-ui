/*
 * MdModel.js
 * 
 * Copyright (c) 2011, Marius Giepz, OSBI Ltd. All rights reserved.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
 * MA 02110-1301  USA
 */
var MetadataModel = Backbone.Model.extend({
    initialize: function(args) {
        this.url = encodeURI("metadata/discover/" + args.path + "/model");
    },
    
    parse: function(response) {

        this.set({
            template: _.template($("#template-md-model").html())({
                mdModel: response
            }),
            
            data: response
        });

        localStorage && localStorage.setItem("md_model." + this.get('key'),
                JSON.stringify(this));
                
        return response;
    },
	
	getColumnById: function(categoryId, columnId){

//???		var categories = this.attributes.categories;
		var categories = this.attributes.data.categories;

		for (var i = 0; i < categories.length; i++) {
			if(categories[i].id ==categoryId){
				for(var j = 0; j <= categories[i].columns.length; j++){
					if(categories[i].columns[j].id==columnId){
						return categories[i].columns[j];
					}
				}
			}
		}

	}
});

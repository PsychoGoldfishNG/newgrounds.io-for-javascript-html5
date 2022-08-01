/**
 * Contains information about a CloudSave slot. 
 * @name Newgrounds.io.model.saveslot 
 * @constructor
 * @memberof Newgrounds.io.model
 * @property {string} datetime - A date and time (in ISO 8601 format) representing when this slot was last saved.
 * @property {number} id - The slot number.
 * @property {number} size - The size of the save data in bytes.
 * @property {number} timestamp - A unix timestamp representing when this slot was last saved.
 * @property {string} url - The URL containing the actual save data for this slot, or null if this slot has no data. 
 * @param {Newgrounds.io.core} [ngio] - A Newgrounds.io.core instance associated with the model object.
 * @param {object} [from_object] - A literal object used to populate this model's properties.
 */
Newgrounds.io.model.saveslot = function(ngio, from_object) {

	/* private vars */
	var _datetime, _id, _size, _timestamp, _url;
	this.__property_names = ["datetime","id","size","timestamp","url"];
	this.__classname = "Newgrounds.io.model.saveslot";
	this.__ngio = ngio;
	
	var _datetime;
	Object.defineProperty(this, 'datetime', {
		get: function() { return typeof(_datetime) == 'undefined' ? null : _datetime; },
		set: function(__vv__) {
			Newgrounds.io.model.checkStrictValue(this.__classname, 'datetime', __vv__, String, null, null, null); 
			_datetime = __vv__;
		}
	});

	var _id;
	Object.defineProperty(this, 'id', {
		get: function() { return typeof(_id) == 'undefined' ? null : _id; },
		set: function(__vv__) {
			Newgrounds.io.model.checkStrictValue(this.__classname, 'id', __vv__, Number, null, null, null); 
			_id = __vv__;
		}
	});

	var _size;
	Object.defineProperty(this, 'size', {
		get: function() { return typeof(_size) == 'undefined' ? null : _size; },
		set: function(__vv__) {
			Newgrounds.io.model.checkStrictValue(this.__classname, 'size', __vv__, Number, null, null, null); 
			_size = __vv__;
		}
	});

	var _timestamp;
	Object.defineProperty(this, 'timestamp', {
		get: function() { return typeof(_timestamp) == 'undefined' ? null : _timestamp; },
		set: function(__vv__) {
			Newgrounds.io.model.checkStrictValue(this.__classname, 'timestamp', __vv__, Number, null, null, null); 
			_timestamp = __vv__;
		}
	});

	var _url;
	Object.defineProperty(this, 'url', {
		get: function() { return typeof(_url) == 'undefined' ? null : _url; },
		set: function(__vv__) {
			Newgrounds.io.model.checkStrictValue(this.__classname, 'url', __vv__, String, null, null, null); 
			_url = __vv__;
		}
	});

	if(from_object) this.fromObject(from_object);
};

Newgrounds.io.model.saveslot.prototype._has_ngio_user = function() {
	return (this.__ngio && this.__ngio.user);
}

/**
 * Converts the model instance to a literal object.
 * @instance
 * @memberof Newgrounds.io.model.saveslot 
 * @function toObject
 * @return {object}
 */
Newgrounds.io.model.saveslot.prototype.toObject = function() {
	var object = {};
	for(var i=0; i<this.__property_names.length; i++) {
		if (typeof(this[this.__property_names[i]]) != 'undefined') object[this.__property_names[i]] = this[this.__property_names[i]];
	}
	return object;
};

/**
 * Populates the model instance using a literal object.
 * @instance
 * @memberof Newgrounds.io.model.saveslot 
 * @function fromObject
 * @param {object} object - An object containing property/value pairs
 */
Newgrounds.io.model.saveslot.prototype.fromObject = function(object) {
	var property, model;
	for(var i=0; i<this.__property_names.length; i++) {
		property = object[this.__property_names[i]]; 
		this[this.__property_names[i]] = property;
	}
};


Newgrounds.io.model.saveslot.prototype.constructor = Newgrounds.io.model.saveslot;

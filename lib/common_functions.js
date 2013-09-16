// always set slave ok
Mongo.prototype.getDB = function(name) {
    this.setSlaveOk();
    return new DB(this, name);
}

prompt = function() {
    return db + "@" + db.serverStatus().host + " π ";
}

var print_json = function(object) {
    print(tojson(object));
};

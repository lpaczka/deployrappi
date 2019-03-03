const NODE_ENV = process.env.NODE_ENV || "dev";
const ENVS ={
    dev:{
        SECRET_KEY: "vsLGRtabym2OGiEeSHRm",
        db:{
            url: "mongodb://lpaczka:hola12@ds149365.mlab.com:49365/proyectofinalnegra"
        }
    },
    test:{
        SECRET_KEY: "2134213",
        db:{
            url: "mongodb://luis:hola11@ds155815.mlab.com:55815/datatest"
        }
    },
    production:{
        SECRET_KEY: process.env.SECRET_KEY,
        db:{
            url: process.env.MONGO_URL
        }
    }
};

module.exports = ENVS[NODE_ENV];
let Singleton = (function() {
    let instance;

    function createConnectionToDB () {
        return {password: '123'}
    }

    return {
        getDBInstance: function() {
            if (!instance) {
                instance = createConnectionToDB();
            }
            return instance;
        }
    }
})()

function run () {
    let instnce1 = Singleton.getDBInstance();
    let instnce2 = Singleton.getDBInstance();
    console.log(instnce1 === instnce2);
}

run();
function ref_table_helper(country) {
    var ref_table = '';

    switch (country) {
        case 'AR':
            ref_table = 'reftableA'
            break;

        case 'BR':
            ref_table = 'reftableB'
            break;

        case 'CL':
            ref_table = 'reftableC'
            break;

        case 'CO':
            ref_table = 'reftableD'
            break;

        case 'CR':
            ref_table = 'reftableE'
            break;

        case 'EC':
            ref_table = 'reftableF'
            break;

        case 'MX':
            ref_table = 'reftableG'
            break;

        case 'PA':
            ref_table = 'reftableH'
            break;

        case 'PE':
            ref_table = 'reftableI'
            break;

        case 'PR':
            ref_table = 'reftableJ'
            break;

        case 'UY':
            ref_table = 'reftableK'
            break;

        default:
            ref_table = 'reftableL'
    }
    return ref_table;
}


for (let i = 0; i< result.length; i++){
    /* IF THE VALUE IS ZERO ON THOSE OCASIONS, IT IS TRANSFORMED TO ZERO */
    if (result[i]['columnA']===null){
      result[i]['columnA'] = '0'
    }
    if (result[i]['columnB']===null){
      result[i]['columnB'] = '0'
    }
    if (result[i]['columnC']===null){
      result[i]['columnC'] = '0'
    }
    if (result[i]['columnD']===null){
      result[i]['columnD'] = '0'
    }
    if (result[i]['columnE']===null){
      result[i]['columnE'] = '0'
    }
}


const verifyUser = function (username, password, callback) {
    dataBase.verifyUser(username, password, (error, userInfo) => {
        if (error) {
            callback(error)
        } else {
            dataBase.getRoles(username, (error, roles) => {
                if (error) {
                    callback(error)
                } else {
                    dataBase.logAccess(username, (error) => {
                        if (error) {
                            callback(error);
                        } else {
                            callback(null, userInfo, roles);
                        }
                    })
                }
            })
        }
    })
};

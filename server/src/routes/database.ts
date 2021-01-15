import mysql from 'promise-mysql';

import accesobd from './accesobd';

const pool = mysql.createPool(accesobd.database);

pool.getConnection()
 .then(connection => {
        pool.releaseConnection(connection);
        console.log('Base de Datos conectada');
    });

export default pool;

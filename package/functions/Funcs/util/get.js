module.exports = async d => {
    const data = d.util.openFunc(d);
    const [ name ] = data.inside.splits;
    
    data.result = d.vars[ name?.addBrackets() ];
    
    return {
        code : d.util.setCode( data )
    }
}
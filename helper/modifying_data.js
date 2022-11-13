const modifyingData = (parsedExcel) => {
    const dataLength = parsedExcel[0].data.length;
    const sourceData = [];
    for(let i = 1; i < dataLength; i++) {
        const modifiedData = {}
        modifiedData['firstName'] = parsedExcel[0].data[i][0];
        modifiedData['lastName'] = parsedExcel[0].data[i][1];
        modifiedData['experience'] = parsedExcel[0].data[i][2];
        modifiedData['salary'] = parsedExcel[0].data[i][3];
        sourceData.push(modifiedData);
    }
    return sourceData;
}

export {modifyingData};
const tools = require('./tools/explorerTools');
const express = require('express');


exports.listAllDir = (req, res, next) => {
        //console.log(req.body);

        // TODO : Verif auth

        //console.log(JSON.stringify(fileExplorer.getJSONFolder()));
        res.send(tools.getJSONFolder());
}
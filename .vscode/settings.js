// .vscode/settings.json 
{ 
    "editor.codeActionsOnSave": { 
      "source.fixAll.eslint": "explicit", 
      "source.fixAll.tslint": "explicit", 
      "source.organizeImports": "explicit" 
    }, 
    "editor.defaultFormatter": "esbenp.prettier-vscode", 
    "editor.formatOnSave": true, 
    "[javascript]": { 
      "editor.formatOnSave": false 
    }, 
    "[typescript]": { 
      "editor.formatOnSave": false 
    }, 
    "eslint.validate": [ 
      "javascript", 
      "javascriptreact", 
      "typescript", 
      "typescriptreact" 
    ], 
    // emmet 
    "emmet.triggerExpansionOnTab": true, 
    "emmet.includeLanguages": { 
      "javascript": "javascriptreact", 
      "typescript": "typescriptreact" 
    }, 
    "typescript.tsdk": "node_modules/typescript/lib" 
  }
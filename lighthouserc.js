
module.exports = {
    ci: {
        collect: {
            puppeteerScript: './puppeteerScript.js',
            puppeteerLaunchOptions: {args: ['--allow-no-sandbox-job', '--allow-sandbox-debugging', '--no-sandbox', '--disable-gpu', '--disable-gpu-sandbox', '--display']}, //https://www.puppeteersharp.com/api/PuppeteerSharp.LaunchOptions.html
            numberOfRuns: 1,
            disableStorageReset: true,

            settings: {

                // Don't clear localStorage/IndexedDB/etc before loading the page.
                "disableStorageReset": true,
                // Wait up to 60s for the page to load
                "maxWaitForLoad": 60000,
                // Use applied throttling instead of simulated throttling
                "throttlingMethod": "devtools"
               // ,
                
                 //   "budgets":[
                   // {
                     // "path":"/*",
                      //"resourceSizes":[
                        // {
                          //  "resourceType":"script",
                            //"budget":200
                         //}
                     // ]
                    //}
                    //]       ,         
            },

            url: ['http://tutorialsninja.com/demo/index.php?route=account/account']
            //, 'http://tutorialsninja.com/demo/index.php?route=product/category&path=20', 'http://tutorialsninja.com/demo/index.php?route=checkout/cart']

        },

// upload: {
//             target: 'lhci',
//             token: '7921f65d-8ecc-4faf-8c2d-e7917a4de286',
//             ignoreDuplicateBuildFailure: true,
//             serverBaseUrl:'http://localhost:9001/'
//         },    
        
             upload: {
            target: 'filesystem',
            outputDir: './lhci_reports',
            reportFilenamePattern: '%%PATHNAME%%-%%DATETIME%%-report.%%EXTENSION%%'
            // token: '',
            // serverBaseUrl: ''
        }
        
       ,

      assert: {
          
             
      "budgetsFile": "budget.json"
    

//             "assertions": {

//                 "categories:performance": ["error", {"minScore": 0.1}],

//                 "categories:accessibility": ["error", {"minScore": 0.1}],

//                 "categories:best-practices": ["error", {"minScore": 0.1}],

//                 "categories:seo": ["error", {"minScore": 0.1}]

//             }

      },

    },

};


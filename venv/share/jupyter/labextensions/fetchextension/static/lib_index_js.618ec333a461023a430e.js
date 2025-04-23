"use strict";
(self["webpackChunkfetchextension"] = self["webpackChunkfetchextension"] || []).push([["lib_index_js"],{

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils");
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lumino_widgets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lumino/widgets */ "webpack/sharing/consume/default/@lumino/widgets");
/* harmony import */ var _lumino_widgets__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lumino_widgets__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Initialization data for the fetchextension extension.
 */
const plugin = {
    id: 'fetchextension:plugin',
    description: 'A JupyterLab extension.',
    autoStart: true,
    requires: [_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.ICommandPalette],
    activate: (app, palette) => {
        console.log('JupyterLab extension is activated!');
        // Define a widget creator function,
        // then call it to make a new widget
        // const newWidget = () => {
        //   // Create a blank content widget inside of a MainAreaWidget
        //   const content = new Widget();
        //   const widget = new MainAreaWidget({ content });
        //   widget.id = 'catalog-jupyterlab';
        //   // widget.title.iconClass = 'fa fa-database'; // Or any other valid icon class
        //   widget.title.closable = true;
        //   // Create a header div and style it
        //   const header = document.createElement('div');
        //   header.textContent = 'Data Catalog Datasets';  // Set your header text
        //   header.style.fontSize = '20px';
        //   header.style.fontWeight = 'bold';
        //   header.style.marginBottom = '10px';
        //   header.style.padding = '10px';
        //   header.style.backgroundColor = '#f1f1f1';  // Background color for header
        //   header.style.borderBottom = '2px solid #ccc'; // Optional bottom border
        //   // Add the header to the content node
        //   content.node.appendChild(header);
        //   // Create a loading spinner element
        //   const spinner = document.createElement('div');
        //   spinner.classList.add('loading-spinner');
        //   spinner.style.width = '50px';
        //   spinner.style.height = '50px';
        //   spinner.style.border = '6px solid #f3f3f3';  // Light gray background
        //   spinner.style.borderTop = '6px solid #3498db'; // Blue spinner
        //   spinner.style.borderRadius = '50%';
        //   spinner.style.animation = 'spin 1s linear infinite';
        //   spinner.style.margin = '20px auto';
        //   // Append the spinner to the content node initially
        //   content.node.appendChild(spinner);
        //     // Function to fetch URLs from API and display them
        //     const fetchAndDisplayUrls = async () => {
        //       try {
        //         // Replace with your actual API endpoint
        //         const response = await fetch('http://localhost:2212/fetch_dkan');
        //         // Ensure response is valid and parse the JSON
        //         if (response.ok) {
        //           const apiresponse = await response.json();
        //           const titles = apiresponse['titles']; // Assuming this is an array of dataset titles
        //           const urls = apiresponse['urls'];    // Assuming this is an array of corresponding URLs
        //           // Check if the data is arrays and have the same length
        //           if (Array.isArray(titles) && Array.isArray(urls) && titles.length === urls.length) {
        //             // Remove the spinner
        //             content.node.removeChild(spinner);
        //             const urlListContainer = document.createElement('div');
        //             // Loop through each title and create a div for each title
        //             titles.forEach((title, index) => {
        //               const titleItem = document.createElement('div');
        //               titleItem.textContent = title;
        //               titleItem.style.marginBottom = '8px';  // Add space between items
        //               titleItem.style.fontSize = '16px';     // Customize font size
        //               titleItem.style.color = '#007bff';     // Set color for the titles
        //               titleItem.style.cursor = 'pointer';   // Make it look clickable
        //               // On click, copy the corresponding URL to clipboard and show a success message
        //               titleItem.onclick = async () => {
        //                 try {
        //                   // Copy the corresponding URL to the clipboard
        //                   const urlToCopy = urls[index];  // Get the URL corresponding to the clicked title
        //                   await navigator.clipboard.writeText(urlToCopy);
        //                   // Show success message
        //                   const message = document.createElement('div');
        //                   message.textContent = `URL copied to clipboard: ${urlToCopy}`;
        //                   message.style.color = 'green';
        //                   message.style.fontSize = '14px';
        //                   message.style.marginTop = '5px';
        //                   titleItem.appendChild(message);
        //                   // Optionally, remove the message after a few seconds
        //                   setTimeout(() => {
        //                     titleItem.removeChild(message);
        //                   }, 3000);
        //                 } catch (err) {
        //                   console.error('Failed to copy the URL:', err);
        //                 }
        //               };
        //               // Append each title item to the container
        //               urlListContainer.appendChild(titleItem);
        //             });
        //             // Add the URL list to the content node
        //             content.node.appendChild(urlListContainer);
        //           }
        //         } else {
        //           console.error('Failed to fetch URLs');
        //           // Remove the spinner
        //           content.node.removeChild(spinner);
        //         }
        //       } catch (error) {
        //         console.error('Error fetching data:', error);
        //         // Remove the spinner
        //         content.node.removeChild(spinner);
        //       }
        //     };
        //   // Call the API to fetch URLs
        //   fetchAndDisplayUrls();
        //   return widget;
        // }
        const newWidget = () => {
            // Create a blank content widget inside of a MainAreaWidget
            const content = new _lumino_widgets__WEBPACK_IMPORTED_MODULE_1__.Widget();
            const widget = new _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.MainAreaWidget({ content });
            widget.id = 'catalog-jupyterlab';
            widget.title.closable = true;
            // Create a header div and style it
            const header = document.createElement('div');
            header.textContent = 'Data Catalog Datasets'; // Set your header text
            header.style.fontSize = '20px';
            header.style.fontWeight = 'bold';
            header.style.marginBottom = '10px';
            header.style.padding = '10px';
            header.style.backgroundColor = '#f1f1f1'; // Background color for header
            header.style.borderBottom = '2px solid #ccc'; // Optional bottom border
            header.style.position = 'relative'; // Make header position relative to place reload button
            // Add the header to the content node
            content.node.appendChild(header);
            // Create a reload button
            const reloadButton = document.createElement('button');
            reloadButton.innerHTML = '↻'; // Reload icon
            reloadButton.style.position = 'absolute';
            reloadButton.style.top = '10px';
            reloadButton.style.right = '10px';
            reloadButton.style.fontSize = '18px';
            reloadButton.style.backgroundColor = 'transparent';
            reloadButton.style.border = 'none';
            reloadButton.style.cursor = 'pointer';
            reloadButton.title = 'Reload Data'; // Tooltip on hover
            // Add the reload button to the header
            header.appendChild(reloadButton);
            // Create a loading spinner element
            const spinner = document.createElement('div');
            spinner.classList.add('loading-spinner');
            spinner.style.width = '50px';
            spinner.style.height = '50px';
            spinner.style.border = '6px solid #f3f3f3'; // Light gray background
            spinner.style.borderTop = '6px solid #3498db'; // Blue spinner
            spinner.style.borderRadius = '50%';
            spinner.style.animation = 'spin 1s linear infinite';
            spinner.style.margin = '20px auto';
            // Append the spinner to the content node initially
            content.node.appendChild(spinner);
            // Function to fetch URLs from API and display them
            const fetchAndDisplayUrls = async () => {
                try {
                    // Remove the existing spinner if it's already in the DOM
                    if (content.node.contains(spinner)) {
                        content.node.removeChild(spinner);
                    }
                    // Show the spinner while loading data
                    content.node.appendChild(spinner);
                    // Replace the existing dataset list (if any)
                    const existingUrlListContainer = content.node.querySelector('.url-list-container');
                    if (existingUrlListContainer) {
                        content.node.removeChild(existingUrlListContainer);
                    }
                    // Replace with your actual API endpoint
                    const response = await fetch('http://10.176.203.169:32444/fetch_dkan');
                    // Ensure response is valid and parse the JSON
                    if (response.ok) {
                        const apiresponse = await response.json();
                        const titles = apiresponse['titles']; // Assuming this is an array of dataset titles
                        const urls = apiresponse['urls']; // Assuming this is an array of corresponding URLs
                        // Check if the data is arrays and have the same length
                        if (Array.isArray(titles) && Array.isArray(urls) && titles.length === urls.length) {
                            // Remove the spinner
                            content.node.removeChild(spinner);
                            const urlListContainer = document.createElement('div');
                            urlListContainer.classList.add('url-list-container'); // Add class for easy identification
                            // Loop through each title and create a div for each title
                            titles.forEach((title, index) => {
                                const titleItem = document.createElement('div');
                                titleItem.textContent = title;
                                titleItem.style.marginBottom = '8px'; // Add space between items
                                titleItem.style.fontSize = '16px'; // Customize font size
                                titleItem.style.color = 'black'; // Set color for the titles
                                titleItem.style.cursor = 'pointer'; // Make it look clickable
                                titleItem.style.paddingLeft = '20px'; // Add padding to the left
                                titleItem.style.position = 'relative'; // To position the 3 dots
                                // Create the three vertical dots on the right
                                const threeDots = document.createElement('span');
                                threeDots.textContent = '⋮';
                                threeDots.style.position = 'absolute';
                                threeDots.style.right = '10px';
                                threeDots.style.cursor = 'pointer';
                                // Context menu to copy URL
                                threeDots.onclick = async () => {
                                    try {
                                        // Copy the corresponding URL to the clipboard
                                        const urlToCopy = urls[index]; // Get the URL corresponding to the clicked title
                                        await navigator.clipboard.writeText(urlToCopy);
                                        // Show success message
                                        const message = document.createElement('div');
                                        message.textContent = `URL copied to clipboard: ${urlToCopy}`;
                                        message.style.color = 'green';
                                        message.style.fontSize = '14px';
                                        message.style.marginTop = '5px';
                                        titleItem.appendChild(message);
                                        // Optionally, remove the message after a few seconds
                                        setTimeout(() => {
                                            titleItem.removeChild(message);
                                        }, 3000);
                                    }
                                    catch (err) {
                                        console.error('Failed to copy the URL:', err);
                                    }
                                };
                                // On click, copy the corresponding URL to clipboard and show a success message
                                titleItem.onclick = async () => {
                                    try {
                                        // Copy the corresponding URL to the clipboard
                                        const urlToCopy = urls[index]; // Get the URL corresponding to the clicked title
                                        await navigator.clipboard.writeText(urlToCopy);
                                        // Show success message
                                        const message = document.createElement('div');
                                        message.textContent = `URL copied to clipboard: ${urlToCopy}`;
                                        message.style.color = 'green';
                                        message.style.fontSize = '14px';
                                        message.style.marginTop = '5px';
                                        titleItem.appendChild(message);
                                        // Optionally, remove the message after a few seconds
                                        setTimeout(() => {
                                            titleItem.removeChild(message);
                                        }, 3000);
                                    }
                                    catch (err) {
                                        console.error('Failed to copy the URL:', err);
                                    }
                                };
                                // Append the 3 dots and title item to the container
                                titleItem.appendChild(threeDots);
                                urlListContainer.appendChild(titleItem);
                            });
                            // Add the URL list to the content node
                            content.node.appendChild(urlListContainer);
                        }
                    }
                    else {
                        console.error('Failed to fetch URLs');
                        // Remove the spinner
                        content.node.removeChild(spinner);
                    }
                }
                catch (error) {
                    console.error('Error fetching data:', error);
                    // Remove the spinner
                    content.node.removeChild(spinner);
                }
            };
            // Initial call to fetch and display URLs
            fetchAndDisplayUrls();
            // Reload data when the reload button is clicked
            reloadButton.onclick = () => {
                fetchAndDisplayUrls(); // Reload the dataset
            };
            return widget;
        };
        // Add some basic CSS for the spinner (you can add this to your stylesheets or a style tag)
        const style = document.createElement('style');
        style.innerHTML = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
        document.head.appendChild(style);
        let widget = newWidget();
        app.shell.add(widget, 'left');
        // Add an application command
        const command = 'apod:open';
        app.commands.addCommand(command, {
            label: 'Fetch Catalog Datasets',
            execute: () => {
                // Regenerate the widget if disposed
                if (widget.isDisposed) {
                    widget = newWidget();
                }
                if (!widget.isAttached) {
                    // Attach the widget to the main work area if it's not there
                    app.shell.add(widget, 'left');
                }
                // Activate the widget
                app.shell.activateById(widget.id);
            }
        });
        // Add the command to the palette.
        palette.addItem({ command, category: 'Tutorial' });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plugin);


/***/ })

}]);
//# sourceMappingURL=lib_index_js.618ec333a461023a430e.js.map
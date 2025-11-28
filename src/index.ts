import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';


import { MainAreaWidget } from '@jupyterlab/apputils';

import { Widget } from '@lumino/widgets';

import { ICommandPalette } from '@jupyterlab/apputils';


/**
 * Initialization data for the fetchextension extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'fetchextension:plugin',
  description: 'A JupyterLab extension.',
  autoStart: true,
  requires: [ICommandPalette],
  activate: (app: JupyterFrontEnd, palette: ICommandPalette) => {
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
    // 28th Nov 2025
    // const newWidget = () => {
    //   // Create a blank content widget inside of a MainAreaWidget
    //   const content = new Widget();
    //   const widget = new MainAreaWidget({ content });
    //   widget.id = 'catalog-jupyterlab';
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
    //   header.style.position = 'relative'; // Make header position relative to place reload button
    
    //   // Add the header to the content node
    //   content.node.appendChild(header);
    
    //   // Create a reload button
    //   const reloadButton = document.createElement('button');
    //   reloadButton.innerHTML = '↻'; // Reload icon
    //   reloadButton.style.position = 'absolute';
    //   reloadButton.style.top = '10px';
    //   reloadButton.style.right = '10px';
    //   reloadButton.style.fontSize = '18px';
    //   reloadButton.style.backgroundColor = 'transparent';
    //   reloadButton.style.border = 'none';
    //   reloadButton.style.cursor = 'pointer';
    //   reloadButton.title = 'Reload Data'; // Tooltip on hover
    
    //   // Add the reload button to the header
    //   header.appendChild(reloadButton);
    
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
    
    //   // Function to fetch URLs from API and display them
    //   const fetchAndDisplayUrls = async () => {
    //     try {
    //       // Remove the existing spinner if it's already in the DOM
    //       if (content.node.contains(spinner)) {
    //         content.node.removeChild(spinner);
    //       }
    
    //       // Show the spinner while loading data
    //       content.node.appendChild(spinner);
    
    //       // Replace the existing dataset list (if any)
    //       const existingUrlListContainer = content.node.querySelector('.url-list-container');
    //       if (existingUrlListContainer) {
    //         content.node.removeChild(existingUrlListContainer);
    //       }

    //       // Replace with your actual API endpoint
    //       const response = await fetch('https://dassa.aphrc.org/catalog-api/fetch_dkan');
          
    //       // Ensure response is valid and parse the JSON
    //       if (response.ok) {
    //         const apiresponse = await response.json();
    
    //         const titles = apiresponse['titles']; // Assuming this is an array of dataset titles
    //         const urls = apiresponse['urls'];    // Assuming this is an array of corresponding URLs
    
    //         // Check if the data is arrays and have the same length
    //         if (Array.isArray(titles) && Array.isArray(urls) && titles.length === urls.length) {
    //           // Remove the spinner
    //           content.node.removeChild(spinner);
    
    //           const urlListContainer = document.createElement('div');
    //           urlListContainer.classList.add('url-list-container'); // Add class for easy identification

    //           urlListContainer.style.height = '100%';
    //           urlListContainer.style.overflowY = 'auto';
    //           urlListContainer.style.overflowX = 'hidden';
    //           urlListContainer.style.paddingRight = '10px';
	  //     urlListContainer.style.boxSizing = 'border-box';
    
    //           // Loop through each title and create a div for each title
    //           titles.forEach((title, index) => {
    //             const titleItem = document.createElement('div');
    //             titleItem.textContent = title;
    //             titleItem.style.marginBottom = '8px';  // Add space between items
    //             titleItem.style.fontSize = '16px';     // Customize font size
    //             titleItem.style.color = 'black';     // Set color for the titles
    //             titleItem.style.cursor = 'pointer';   // Make it look clickable
    //             titleItem.style.paddingLeft = '20px';  // Add padding to the left
    //             titleItem.style.position = 'relative'; // To position the 3 dots
    
    //             // Create the three vertical dots on the right
    //             const threeDots = document.createElement('span');
    //             threeDots.textContent = '⋮';
    //             threeDots.style.position = 'absolute';
    //             threeDots.style.right = '10px';
    //             threeDots.style.cursor = 'pointer';
                
    //             // Context menu to copy URL
    //             threeDots.onclick = async () => {
    //               try {
    //                 // Copy the corresponding URL to the clipboard
    //                 const urlToCopy = urls[index];  // Get the URL corresponding to the clicked title
    //                 await navigator.clipboard.writeText(urlToCopy);
                    
    //                 // Show success message
    //                 const message = document.createElement('div');
    //                 message.textContent = `URL copied to clipboard: ${urlToCopy}`;
    //                 message.style.color = 'green';
    //                 message.style.fontSize = '14px';
    //                 message.style.marginTop = '5px';
    //                 titleItem.appendChild(message);
                    
    //                 // Optionally, remove the message after a few seconds
    //                 setTimeout(() => {
    //                   titleItem.removeChild(message);
    //                 }, 3000);
    //               } catch (err) {
    //                 console.error('Failed to copy the URL:', err);
    //               }
    //             };
    
    //             // On click, copy the corresponding URL to clipboard and show a success message
    //             titleItem.onclick = async () => {
    //               try {
    //                 // Copy the corresponding URL to the clipboard
    //                 const urlToCopy = urls[index];  // Get the URL corresponding to the clicked title
    //                 //await navigator.clipboard.writeText(urlToCopy);
    //                 // Create a temporary textarea element to hold the URL
	  //           const textarea = document.createElement('textarea');
    // 		    textarea.value = urlToCopy;  // Set the URL as the value of the textarea
		//     document.body.appendChild(textarea);  // Append the textarea to the body

		//     // Select the content of the textarea
		//     textarea.select();
		//     textarea.setSelectionRange(0, 99999);  // For mobile devices

		//     // Execute the "copy" command to copy the text
		//     const successful = document.execCommand('copy');
    
		//     // Remove the temporary textarea from the document
		//     document.body.removeChild(textarea);
    //                 // Show success message
		//     if (successful){
    //                 const message = document.createElement('div');
    //                 message.textContent = `URL copied to clipboard: ${urlToCopy}`;
    //                 message.style.color = 'green';
    //                 message.style.fontSize = '14px';
    //                 message.style.marginTop = '5px';
    //                 titleItem.appendChild(message);
                    
    //                 // Optionally, remove the message after a few seconds
    //                 setTimeout(() => {
    //                   titleItem.removeChild(message);
    //                 }, 3000);}
		//     else{ console.log('Failed to copy URl');}
    //               } catch (err) {
    //                 console.error('Failed to copy the URL:', err);
    //               }
    //             };
    
    //             // Append the 3 dots and title item to the container
    //             titleItem.appendChild(threeDots);
    //             urlListContainer.appendChild(titleItem);
    //           });
    
    //           // Add the URL list to the content node
    //           content.node.appendChild(urlListContainer);
    //         }
    //       } else {
    //         console.error('Failed to fetch URLs');
    //         // Remove the spinner
    //         content.node.removeChild(spinner);
    //       }
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //       // Remove the spinner
    //       content.node.removeChild(spinner);
    //     }
    //   };
    
    //   // Initial call to fetch and display URLs
    //   fetchAndDisplayUrls();
    
    //   // Reload data when the reload button is clicked
    //   reloadButton.onclick = () => {
    //     fetchAndDisplayUrls(); // Reload the dataset
    //   };
    
    //   return widget;
    // };

    const newWidget = () => {
  // Create a blank content widget inside of a MainAreaWidget
  const content = new Widget();
  const widget = new MainAreaWidget({ content });
  widget.id = 'catalog-jupyterlab';
  widget.title.closable = true;

  // --- typed data storage for current fetched titles/urls ---
  let titlesArr: string[] = [];
  let urlsArr: string[] = [];

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

  // --- SEARCH: input + button (keeps rest same) ---
  const searchWrapper = document.createElement('div');
  searchWrapper.style.display = 'inline-block';
  searchWrapper.style.marginLeft = '12px';
  searchWrapper.style.verticalAlign = 'middle';

  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.placeholder = 'Search datasets...';
  searchInput.style.padding = '6px 10px';
  searchInput.style.fontSize = '14px';
  searchInput.style.width = '260px';
  searchInput.style.border = '1px solid #ccc';
  searchInput.style.borderRadius = '6px';
  searchInput.style.marginRight = '6px';
  searchWrapper.appendChild(searchInput);

  const searchButton = document.createElement('button');
  searchButton.textContent = 'Search';
  searchButton.style.padding = '6px 10px';
  searchButton.style.borderRadius = '6px';
  searchButton.style.border = '1px solid #888';
  searchButton.style.cursor = 'pointer';
  searchWrapper.appendChild(searchButton);

  header.appendChild(searchWrapper);

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

  // Container used to render the list (kept same semantics as before)
  const urlListContainer = document.createElement('div');
  urlListContainer.classList.add('url-list-container');
  urlListContainer.style.height = '100%';
  urlListContainer.style.overflowY = 'auto';
  urlListContainer.style.overflowX = 'hidden';
  urlListContainer.style.paddingRight = '10px';
  urlListContainer.style.boxSizing = 'border-box';

  // Helper: render the list using an optional filter string (case-insensitive)
  const renderList = (filter = '') => {
    // Remove all previous content
    urlListContainer.innerHTML = '';

    const normalizedFilter = String(filter || '').trim().toLowerCase();

    if (!Array.isArray(titlesArr) || titlesArr.length === 0) {
      const empty = document.createElement('div');
      empty.textContent = 'No datasets available.';
      empty.style.margin = '12px';
      empty.style.color = '#666';
      urlListContainer.appendChild(empty);
      return;
    }

    // find indices that match filter
    const indicesToShow = titlesArr
      .map((t, i) => ({ t, i }))
      .filter(({ t }) => {
        if (!t) return false;
        if (!normalizedFilter) return true;
        return t.toLowerCase().includes(normalizedFilter);
      })
      .map(({ i }) => i);

    if (indicesToShow.length === 0) {
      const none = document.createElement('div');
      none.textContent = 'No datasets match your search.';
      none.style.margin = '12px';
      none.style.color = '#666';
      urlListContainer.appendChild(none);
      return;
    }

    indicesToShow.forEach((index) => {
      const titleItem = document.createElement('div');
      const title = titlesArr[index];
      const url = urlsArr[index];

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
      threeDots.onclick = async (e) => {
        e.stopPropagation();
        try {
          // Copy the corresponding URL to the clipboard
          const urlToCopy = url; // Get the URL corresponding to the clicked title
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
            if (titleItem.contains(message)) titleItem.removeChild(message);
          }, 3000);
        } catch (err) {
          console.error('Failed to copy the URL:', err);
        }
      };

      // On click, copy the corresponding URL to clipboard and show a success message
      titleItem.onclick = async () => {
        try {
          // Copy the corresponding URL to the clipboard
          const urlToCopy = url; // Get the URL corresponding to the clicked title

          // Create a temporary textarea element to hold the URL (fallback)
          const textarea = document.createElement('textarea');
          textarea.value = urlToCopy; // Set the URL as the value of the textarea
          document.body.appendChild(textarea); // Append the textarea to the body

          // Select the content of the textarea
          textarea.select();
          textarea.setSelectionRange(0, 99999); // For mobile devices

          // Execute the "copy" command to copy the text
          const successful = document.execCommand('copy');

          // Remove the temporary textarea from the document
          document.body.removeChild(textarea);

          // Show success message
          if (successful) {
            const message = document.createElement('div');
            message.textContent = `URL copied to clipboard: ${urlToCopy}`;
            message.style.color = 'green';
            message.style.fontSize = '14px';
            message.style.marginTop = '5px';
            titleItem.appendChild(message);

            // Optionally, remove the message after a few seconds
            setTimeout(() => {
              if (titleItem.contains(message)) titleItem.removeChild(message);
            }, 3000);
          } else {
            // fallback to navigator.clipboard if available
            if (navigator.clipboard && navigator.clipboard.writeText) {
              try {
                await navigator.clipboard.writeText(urlToCopy);
                const message = document.createElement('div');
                message.textContent = `URL copied to clipboard: ${urlToCopy}`;
                message.style.color = 'green';
                message.style.fontSize = '14px';
                message.style.marginTop = '5px';
                titleItem.appendChild(message);
                setTimeout(() => {
                  if (titleItem.contains(message)) titleItem.removeChild(message);
                }, 3000);
              } catch (err) {
                console.error('Failed to copy URL via navigator.clipboard:', err);
              }
            } else {
              console.log('Failed to copy URL');
            }
          }
        } catch (err) {
          console.error('Failed to copy the URL:', err);
        }
      };

      // Append the 3 dots and title item to the container
      titleItem.appendChild(threeDots);
      urlListContainer.appendChild(titleItem);
    });
  };

  // Append the spinner and list container to content
  content.node.appendChild(spinner);
  content.node.appendChild(urlListContainer);

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
      const response = await fetch('https://dassa.aphrc.org/catalog-api/fetch_dkan'); // <-- set your endpoint here

      // Ensure response is valid and parse the JSON
      if (response.ok) {
        const apiresponse = await response.json();

        const titles = apiresponse['titles']; // Assuming this is an array of dataset titles
        const urls = apiresponse['urls']; // Assuming this is an array of corresponding URLs

        // Check if the data is arrays and have the same length
        if (Array.isArray(titles) && Array.isArray(urls) && titles.length === urls.length) {
          // Remove the spinner
          if (content.node.contains(spinner)) {
            content.node.removeChild(spinner);
          }

          // store fetched arrays (cast to string[])
          titlesArr = titles as string[];
          urlsArr = urls as string[];

          // Re-append urlListContainer (we removed earlier)
          content.node.appendChild(urlListContainer);

          // Render without filter (full list)
          renderList('');
        }
      } else {
        console.error('Failed to fetch URLs');
        // Remove the spinner
        if (content.node.contains(spinner)) content.node.removeChild(spinner);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      // Remove the spinner
      if (content.node.contains(spinner)) content.node.removeChild(spinner);
      // Use safe cast for unknown error type
      const msg = (error && (error as Error).message) ? (error as Error).message : String(error);
      urlListContainer.innerHTML = `<div style="margin:12px;color:#666">Error: ${msg}</div>`;
    }
  };

  // Initial call to fetch and display URLs
  fetchAndDisplayUrls();

  // Reload data when the reload button is clicked
  reloadButton.onclick = () => {
    fetchAndDisplayUrls(); // Reload the dataset
  };

  // Make the Search button functional: it filters the currently fetched titles
  searchButton.onclick = () => {
    renderList(searchInput.value);
  };

  // Allow pressing Enter inside input to trigger search as well
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      renderList(searchInput.value);
    } else if (e.key === 'Escape') {
      searchInput.value = '';
      renderList('');
    }
  });

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
    const command: string = 'apod:open';
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

export default plugin;

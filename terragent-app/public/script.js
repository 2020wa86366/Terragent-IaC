// Poll for the latest workflow status every 10 seconds
setInterval(() => {
    fetch('/workflow-status')
      .then(response => response.json())
      .then(data => {
        const messageBox = document.getElementById('message-box');
        messageBox.textContent = `Status: ${data.status}, Conclusion: ${data.conclusion}`;
        messageBox.href = data.url; // Link to the GitHub Actions logs
      })
      .catch(error => {
        console.error('Error fetching workflow status:', error);
        const messageBox = document.getElementById('message-box');
        messageBox.textContent = 'Error fetching workflow status.';
      });
  }, 10000);

  // Function to handle cloud provider button clicks
  function toggleCloudResources(cloudId) {
    var resourcesDiv = document.getElementById(cloudId + '-resources');
    resourcesDiv.style.display = resourcesDiv.style.display === 'none' ? 'block' : 'none';
  }

  // Event listeners for cloud provider buttons
  document.getElementById('azure-button').addEventListener('click', function() {
    toggleCloudResources('azure');
  });
  // ... (Repeat for other cloud providers)

 // Function to deploy a resource
function deployResource(cloud) {
  const resourceDropdown = document.getElementById(`${cloud}-resource-dropdown`);
  const resource = resourceDropdown.value;

  fetch(resource, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ resource: resource }),
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById('message-box').innerText = data.message;
  })
  .catch(error => {
    document.getElementById('message-box').innerText = 'Error: ' + error;
  });
}

  // Function to destroy a resource with a warning message
function destroyResource(cloud) {
  const resourceDropdown = document.getElementById(`${cloud}-resource-dropdown`);
  const resource = resourceDropdown.value;

  // Show a confirmation dialog before destroying the resource
  if (confirm('Are you sure you want to destroy this resource? This action cannot be undone.')) {
    fetch(resource.replace('/deploy/', '/destroy/'), { // Change the path to the destroy endpoint
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ resource: resource }),
    })
    .then(response => response.json())
    .then(data => {
      document.getElementById('message-box').innerText = data.message;
    })
    .catch(error => {
      document.getElementById('message-box').innerText = 'Error: ' + error;
    });
  }
}

  // Function to check the status of the GitHub Actions workflow
  function checkWorkflowStatus() {
    fetch('/workflow-status')
    .then(response => response.json())
    .then(data => {
      document.getElementById('message-box').innerText = 'Workflow status: ' + data.status + ', conclusion: ' + data.conclusion;
    })
    .catch(error => {
      document.getElementById('message-box').innerText = 'Error fetching workflow status: ' + error;
    });
  }

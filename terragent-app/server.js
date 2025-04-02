require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();
const fs = require('fs').promises;
const path = require('path');

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies (for form submissions)
app.use(express.urlencoded({ extended: true }));

// Route to render the main page using EJS
app.get('/', (req, res) => {
  res.render('index');
});

// Route to trigger a GitHub Actions workflow - RG-Create
app.post('/deploy/resource-group', async (req, res) => {
  const resource = req.body.resource; // Get the selected resource from the request body
  const workflowId = 'terragent-RG-create.yaml'; // Replace with your actual workflow file name

  try {
    const response = await axios.post(
      `https://api.github.com/repos/RepoName/${process.env.REPO}/actions/workflows/${workflowId}/dispatches`,
      { ref: 'main' },
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'Authorization': `token ${process.env.GITHUB_TOKEN}`,
        },
      }
    );

    if (response.status === 204) {
      res.json({ message: 'Resource Group workflow dispatched successfully!' });
    } else {
      res.json({ message: 'Unexpected response status code received.' });
    }
  } catch (error) {
    console.error('Error dispatching the Resource Group workflow:', error.response ? error.response.data : error.message);
    res.status(500).json({ message: 'Failed to dispatch Resource Group workflow: ' + (error.response ? error.response.data.message : error.message) });
  }
});

// Route to trigger a GitHub Actions workflow - RG-Destroy
app.post('/destroy/resource-group', async (req, res) => {
  const workflowId = 'terragent-RG-destroy.yaml'; // Replace with your actual workflow file name for destroy action

  try {
    const response = await axios.post(
      `https://api.github.com/repos/RepoName/${process.env.REPO}/actions/workflows/${workflowId}/dispatches`,
      { ref: 'main' },
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'Authorization': `token ${process.env.GITHUB_TOKEN}`,
        },
      }
    );

    if (response.status === 204) {
      res.json({ message: 'Resource Group destroy workflow dispatched successfully!' });
    } else {
      res.json({ message: 'Unexpected response status code received.' });
    }
  } catch (error) {
    console.error('Error dispatching the Resource Group destroy workflow:', error.response ? error.response.data : error.message);
    res.status(500).json({ message: 'Failed to dispatch Resource Group destroy workflow: ' + (error.response ? error.response.data.message : error.message) });
  }
});

// Route to trigger a GitHub Actions workflow - VNET-Create
app.post('/deploy/vnet', async (req, res) => {
  const resource = req.body.resource; // Get the selected resource from the request body
  const workflowId = 'terragent-vnet-create.yaml'; // Replace with your actual workflow file name

  try {
    const response = await axios.post(
      `https://api.github.com/repos/RepoName/${process.env.REPO}/actions/workflows/${workflowId}/dispatches`,
      { ref: 'main' },
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'Authorization': `token ${process.env.GITHUB_TOKEN}`,
        },
      }
    );

    if (response.status === 204) {
      res.json({ message: 'Resource Group workflow dispatched successfully!' });
    } else {
      res.json({ message: 'Unexpected response status code received.' });
    }
  } catch (error) {
    console.error('Error dispatching the Resource Group workflow:', error.response ? error.response.data : error.message);
    res.status(500).json({ message: 'Failed to dispatch Resource Group workflow: ' + (error.response ? error.response.data.message : error.message) });
  }
});

// Route to trigger a GitHub Actions workflow - VNET-Destroy
app.post('/destroy/vnet', async (req, res) => {
  const workflowId = 'terragent-vnet-destroy.yaml'; // Replace with your actual workflow file name for destroy action

  try {
    const response = await axios.post(
      `https://api.github.com/repos/RepoName/${process.env.REPO}/actions/workflows/${workflowId}/dispatches`,
      { ref: 'main' },
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'Authorization': `token ${process.env.GITHUB_TOKEN}`,
        },
      }
    );

    if (response.status === 204) {
      res.json({ message: 'Resource Group destroy workflow dispatched successfully!' });
    } else {
      res.json({ message: 'Unexpected response status code received.' });
    }
  } catch (error) {
    console.error('Error dispatching the Resource Group destroy workflow:', error.response ? error.response.data : error.message);
    res.status(500).json({ message: 'Failed to dispatch Resource Group destroy workflow: ' + (error.response ? error.response.data.message : error.message) });
  }
});

// Route to trigger a GitHub Actions workflow - OpenAI-Create
app.post('/deploy/openai', async (req, res) => {
  const resource = req.body.resource; // Get the selected resource from the request body
  const workflowId = 'terragent-openai-create.yaml'; // Replace with your actual workflow file name

  try {
    const response = await axios.post(
      `https://api.github.com/repos/RepoName/${process.env.REPO}/actions/workflows/${workflowId}/dispatches`,
      { ref: 'main' },
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'Authorization': `token ${process.env.GITHUB_TOKEN}`,
        },
      }
    );

    if (response.status === 204) {
      res.json({ message: 'Resource Group workflow dispatched successfully!' });
    } else {
      res.json({ message: 'Unexpected response status code received.' });
    }
  } catch (error) {
    console.error('Error dispatching the Resource Group workflow:', error.response ? error.response.data : error.message);
    res.status(500).json({ message: 'Failed to dispatch Resource Group workflow: ' + (error.response ? error.response.data.message : error.message) });
  }
});

// Route to trigger a GitHub Actions workflow - OpenAI-Destroy
app.post('/destroy/openai', async (req, res) => {
  const workflowId = 'terragent-openai-destroy.yaml'; // Replace with your actual workflow file name for destroy action

  try {
    const response = await axios.post(
      `https://api.github.com/repos/RepoName/${process.env.REPO}/actions/workflows/${workflowId}/dispatches`,
      { ref: 'main' },
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'Authorization': `token ${process.env.GITHUB_TOKEN}`,
        },
      }
    );

    if (response.status === 204) {
      res.json({ message: 'Resource Group destroy workflow dispatched successfully!' });
    } else {
      res.json({ message: 'Unexpected response status code received.' });
    }
  } catch (error) {
    console.error('Error dispatching the Resource Group destroy workflow:', error.response ? error.response.data : error.message);
    res.status(500).json({ message: 'Failed to dispatch Resource Group destroy workflow: ' + (error.response ? error.response.data.message : error.message) });
  }
});

// Route to trigger a GitHub Actions workflow - DocumentAI-Create
app.post('/deploy/documentai', async (req, res) => {
  const resource = req.body.resource; // Get the selected resource from the request body
  const workflowId = 'terragent-documentai-create.yaml'; // Replace with your actual workflow file name

  try {
    const response = await axios.post(
      `https://api.github.com/repos/RepoName/${process.env.REPO}/actions/workflows/${workflowId}/dispatches`,
      { ref: 'main' },
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'Authorization': `token ${process.env.GITHUB_TOKEN}`,
        },
      }
    );

    if (response.status === 204) {
      res.json({ message: 'Resource Group workflow dispatched successfully!' });
    } else {
      res.json({ message: 'Unexpected response status code received.' });
    }
  } catch (error) {
    console.error('Error dispatching the Resource Group workflow:', error.response ? error.response.data : error.message);
    res.status(500).json({ message: 'Failed to dispatch Resource Group workflow: ' + (error.response ? error.response.data.message : error.message) });
  }
});

// Route to trigger a GitHub Actions workflow - DocumentAI-Destroy
app.post('/destroy/documentai', async (req, res) => {
  const workflowId = 'terragent-documentai-destroy.yaml'; // Replace with your actual workflow file name for destroy action

  try {
    const response = await axios.post(
      `https://api.github.com/repos/RepoName/${process.env.REPO}/actions/workflows/${workflowId}/dispatches`,
      { ref: 'main' },
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'Authorization': `token ${process.env.GITHUB_TOKEN}`,
        },
      }
    );

    if (response.status === 204) {
      res.json({ message: 'Resource Group destroy workflow dispatched successfully!' });
    } else {
      res.json({ message: 'Unexpected response status code received.' });
    }
  } catch (error) {
    console.error('Error dispatching the Resource Group destroy workflow:', error.response ? error.response.data : error.message);
    res.status(500).json({ message: 'Failed to dispatch Resource Group destroy workflow: ' + (error.response ? error.response.data.message : error.message) });
  }
});

// Route to trigger a GitHub Actions workflow - AI-WebApp-Create
app.post('/deploy/ai-webapp', async (req, res) => {
  const resource = req.body.resource; // Get the selected resource from the request body
  const workflowId = 'terragent-ai-webapp-create.yaml'; // Replace with your actual workflow file name

  try {
    const response = await axios.post(
      `https://api.github.com/repos/RepoName/${process.env.REPO}/actions/workflows/${workflowId}/dispatches`,
      { ref: 'main' },
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'Authorization': `token ${process.env.GITHUB_TOKEN}`,
        },
      }
    );

    if (response.status === 204) {
      res.json({ message: 'Resource Group workflow dispatched successfully!' });
    } else {
      res.json({ message: 'Unexpected response status code received.' });
    }
  } catch (error) {
    console.error('Error dispatching the Resource Group workflow:', error.response ? error.response.data : error.message);
    res.status(500).json({ message: 'Failed to dispatch Resource Group workflow: ' + (error.response ? error.response.data.message : error.message) });
  }
});

// Route to trigger a GitHub Actions workflow - AI-WebApp-Destroy
app.post('/destroy/ai-webapp', async (req, res) => {
  const workflowId = 'terragent-ai-webapp-destroy.yaml'; // Replace with your actual workflow file name for destroy action

  try {
    const response = await axios.post(
      `https://api.github.com/repos/RepoName/${process.env.REPO}/actions/workflows/${workflowId}/dispatches`,
      { ref: 'main' },
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'Authorization': `token ${process.env.GITHUB_TOKEN}`,
        },
      }
    );

    if (response.status === 204) {
      res.json({ message: 'Resource Group destroy workflow dispatched successfully!' });
    } else {
      res.json({ message: 'Unexpected response status code received.' });
    }
  } catch (error) {
    console.error('Error dispatching the Resource Group destroy workflow:', error.response ? error.response.data : error.message);
    res.status(500).json({ message: 'Failed to dispatch Resource Group destroy workflow: ' + (error.response ? error.response.data.message : error.message) });
  }
});

// Route to check the status of the GitHub Actions workflow
app.get('/workflow-status', async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.github.com/repos/RepoName/${process.env.REPO}/actions/runs`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'Authorization': `token ${process.env.GITHUB_TOKEN}`,
        },
      }
    );

    const runs = response.data.workflow_runs;
    const latestRun = runs[0]; // Assuming the latest run is the first item
    res.json({ status: latestRun.status, conclusion: latestRun.conclusion, url: latestRun.html_url });
  } catch (error) {
    console.error('Error fetching workflow status:', error.message);
    res.status(500).json({ message: 'Failed to fetch workflow status' });
  }
});

// Add this route after your existing routes
app.post('/update-terraform-tags', async (req, res) => {
  const { tags } = req.body;
  const filePath = 'Terragent-RG/main.tf';

  try {
    // First get the current file content and sha
    const fileResponse = await axios.get(
      `https://api.github.com/repos/RepoName/${process.env.REPO}/contents/${filePath}`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'Authorization': `token ${process.env.GITHUB_TOKEN}`,
        },
      }
    );

    // Decode the content
    const content = Buffer.from(fileResponse.data.content, 'base64').toString();
    
    // Parse the tags string into an object
    const tagsObject = {};
    tags.split(',').forEach(tag => {
      const [key, value] = tag.split('=');
      if (key && value) {
        tagsObject[key.trim()] = value.trim();
      }
    });

    // Create the new tags block
    const tagsBlock = Object.entries(tagsObject)
      .map(([key, value]) => `    "${key}" = "${value}"`)
      .join('\n');

    // Replace the existing tags block
    const tagRegex = /tags\s*=\s*{[^}]*}/s;
    const newContent = content.replace(tagRegex, `tags = {\n${tagsBlock}\n  }`);

    // Update the file in GitHub
    const updateResponse = await axios.put(
      `https://api.github.com/repos/RepoName/${process.env.REPO}/contents/${filePath}`,
      {
        message: 'Update tags in terraform configuration',
        content: Buffer.from(newContent).toString('base64'),
        sha: fileResponse.data.sha
      },
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'Authorization': `token ${process.env.GITHUB_TOKEN}`,
        },
      }
    );

    // If successful, trigger the workflow
    if (updateResponse.status === 200) {
      const workflowId = 'terragent-RG-create.yaml';
      await axios.post(
        `https://api.github.com/repos/RepoName/${process.env.REPO}/actions/workflows/${workflowId}/dispatches`,
        { ref: 'main' },
        {
          headers: {
            'Accept': 'application/vnd.github.v3+json',
            'Authorization': `token ${process.env.GITHUB_TOKEN}`,
          },
        }
      );
      res.json({ message: 'Tags updated and workflow triggered successfully' });
    }
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    res.status(500).json({ 
      message: 'Failed to update tags and trigger workflow', 
      error: error.response ? error.response.data : error.message 
    });
  }
});

// Add this route to query resource group details
app.post('/query/resource-group', async (req, res) => {
  const { resourceGroupName } = req.body;
  const workflowId = 'terragent-RG-query.yaml';

  try {
    const response = await axios.post(
      `https://api.github.com/repos/RepoName/${process.env.REPO}/actions/workflows/${workflowId}/dispatches`,
      { 
        ref: 'main',
        inputs: {
          resource_group_name: resourceGroupName
        }
      },
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'Authorization': `token ${process.env.GITHUB_TOKEN}`,
        },
      }
    );

    if (response.status === 204) {
      res.json({ message: 'Resource Group query workflow dispatched successfully!' });
    } else {
      res.json({ message: 'Unexpected response status code received.' });
    }
  } catch (error) {
    console.error('Error querying resource group:', error.response ? error.response.data : error.message);
    res.status(500).json({ 
      message: 'Failed to query resource group', 
      error: error.response ? error.response.data.message : error.message 
    });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

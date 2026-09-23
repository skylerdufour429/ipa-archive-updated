const appList = document.getElementById('appList');
const appCount = document.getElementById('appCount');
const searchInput = document.getElementById('searchInput');

let allApps = [];

function normalizeText(value) {
  return String(value ?? '')
    .toLowerCase()
    .trim();
}

function renderArchive(apps) {
  const term = normalizeText(searchInput.value);
  const filteredApps = apps.filter((app) => {
    const haystack = [
      app.name,
      app.bundleId,
      app.version,
      app.platform,
      app.minimumOS,
      app.ipaFilename,
      app.fileSize,
      app.bundlePath,
      app.archiveType,
      app.installationInfo,
      app.generatorUrl,
    ]
      .join(' ')
      .toLowerCase();

    return haystack.includes(term);
  });

  appCount.textContent = `${filteredApps.length} app${filteredApps.length === 1 ? '' : 's'} found`;

  if (!filteredApps.length) {
    appList.innerHTML = '<div class="empty-state">No matching IPA archives found.</div>';
    return;
  }

  appList.innerHTML = filteredApps
    .map((app) => {
      const downloadLink = app.downloadUrl
        ? `<a class="download-btn" href="${app.downloadUrl}" target="_blank" rel="noreferrer noopener">Download IPA</a>`
        : '<span class="download-btn" aria-disabled="true" style="pointer-events: none; opacity: 0.55;">Download IPA</span>';

      const generatorLink = app.generatorUrl
        ? `<a href="${app.generatorUrl}" target="_blank" rel="noreferrer noopener">${app.generatorUrl}</a>`
        : '<span>Not specified</span>';

      return `
        <article class="app-card">
          <h2>${app.name}</h2>
          <div class="meta-grid">
            <div class="meta-item"><span>App Name</span><strong>${app.name}</strong></div>
            <div class="meta-item"><span>Bundle ID</span><strong>${app.bundleId}</strong></div>
            <div class="meta-item"><span>Version</span><strong>${app.version}</strong></div>
            <div class="meta-item"><span>Platform</span><strong>${app.platform}</strong></div>
            <div class="meta-item"><span>Minimum OS</span><strong>${app.minimumOS}</strong></div>
            <div class="meta-item"><span>IPA filename</span><strong>${app.ipaFilename}</strong></div>
            <div class="meta-item"><span>File Size</span><strong>${app.fileSize}</strong></div>
            <div class="meta-item"><span>App Bundle Path</span><strong>${app.bundlePath}</strong></div>
            <div class="meta-item"><span>Archive Type</span><strong>${app.archiveType}</strong></div>
            <div class="meta-item"><span>Download button</span><strong>${app.downloadUrl ? 'Available' : 'Unavailable'}</strong></div>
            <div class="meta-item"><span>Generator URL</span>${generatorLink}</div>
          </div>
          <div class="info-box">
            <h3>Installation information</h3>
            <p>${app.installationInfo}</p>
          </div>
          ${downloadLink}
        </article>
      `;
    })
    .join('');
}

async function loadArchive() {
  try {
    const response = await fetch('data/apps.json');
    if (!response.ok) {
      throw new Error(`Failed to load archive data: ${response.status}`);
    }

    allApps = await response.json();
    renderArchive(allApps);
  } catch (error) {
    appCount.textContent = 'Unable to load archive data';
    appList.innerHTML = `<div class="empty-state">${error.message}</div>`;
  }
}

searchInput.addEventListener('input', () => renderArchive(allApps));
loadArchive();

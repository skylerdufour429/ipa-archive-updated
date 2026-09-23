# IPA Archive

A simple, static IPA archive web app designed for **GitHub Pages** and **GitHub Codespaces**.

The application displays IPA metadata in a searchable archive interface and provides download links for IPA files stored in the repository or referenced by external URLs.

## App Information

Each archive entry can contain:

* **App Name**
* **Bundle ID**
* **Version**
* **Platform**
* **Minimum OS**
* **IPA filename**
* **File Size**
* **App Bundle Path**
* **Archive Type**
* **Download button**
* **Installation information**
* **Generator URL**

## Example Entry

```json
{
  "name": "Example App",
  "bundleId": "com.example.app",
  "version": "1.0.0",
  "platform": "iOS",
  "minimumOS": "15.0",
  "ipaFilename": "ExampleApp-1.0.0.ipa",
  "fileSize": "42.8 MB",
  "bundlePath": "Payload/ExampleApp.app",
  "archiveType": "IPA",
  "downloadUrl": "ipas/ExampleApp-1.0.0.ipa",
  "installationInfo": "Install using a compatible sideloading or device-management method.",
  "generatorUrl": "https://example.com"
}
```

## GitHub Pages

This project is a static website and can be deployed using GitHub Pages.

### Enable GitHub Pages

1. Open the repository on GitHub.
2. Go to **Settings**.
3. Select **Pages**.
4. Under **Build and deployment**, select **GitHub Actions**.
5. Push the project to the repository.
6. GitHub Actions will deploy the site.

The resulting site will normally be available at:

```text
https://USERNAME.github.io/REPOSITORY/
```

## GitHub Codespaces

The repository includes a `.devcontainer/devcontainer.json` configuration.

Open the repository and select:

**Code → Codespaces → Create codespace on main**

Then start a local development server:

```bash
python3 -m http.server 8000
```

Open port `8000` from the Codespaces **Ports** panel.

## Adding IPA Files

For small archives, IPA files can be stored in the repository:

```text
ipas/
├── ExampleApp-1.0.0.ipa
└── AnotherApp-2.1.0.ipa
```

Then reference the file from `data/apps.json`:

```json
"downloadUrl": "ipas/ExampleApp-1.0.0.ipa"
```

For larger archives, it is generally preferable to store the files outside Git's normal source history and use an appropriate release or object-storage system.

## Archive Data

Edit:

```text
data/apps.json
```

Each object represents one archived application.

Example:

```json
[
  {
    "name": "Example App",
    "bundleId": "com.example.app",
    "version": "1.0.0",
    "platform": "iOS",
    "minimumOS": "15.0",
    "ipaFilename": "ExampleApp-1.0.0.ipa",
    "fileSize": "42.8 MB",
    "bundlePath": "Payload/ExampleApp.app",
    "archiveType": "IPA",
    "downloadUrl": "ipas/ExampleApp-1.0.0.ipa",
    "installationInfo": "Install using a compatible sideloading or device-management method.",
    "generatorUrl": "https://example.com"
  }
]
```

## Installation Information

An IPA archive is simply an application package. Installing an IPA on a device can require appropriate signing, provisioning, device-management, or sideloading mechanisms depending on the device, OS version, and distribution method.

The archive interface therefore treats installation information as documentation supplied by the archive maintainer rather than attempting to bypass Apple's platform security.

## Generator URL

The optional `generatorUrl` field can identify the tool or service that generated an archive.

Example:

```json
"generatorUrl": "https://example.com"
```

Only use URLs that you trust and have permission to distribute or reference.

## License

Add the license appropriate for your project.

Do not upload or redistribute applications, IPAs, or other copyrighted material unless you have the necessary rights or authorization.

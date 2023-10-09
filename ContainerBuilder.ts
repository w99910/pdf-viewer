export default class ContainerBuilder {
    public buildPDFContainer() {
        let pdfContainer = document.createElement("div");
        pdfContainer.style.position = "absolute";
        pdfContainer.style.width = "100%";
        let viewer = document.createElement("div");
        viewer.id = "viewer";
        viewer.className = "pdfViewer";
        pdfContainer.append(viewer);
        return pdfContainer;
    }

    public buildButtonsContainer() {
        let buttonsContainer = document.createElement("div");
        buttonsContainer.className =
            "w-full grid grid-cols-3 gap-x-2 rounded items-center border shadow-lg p-1 bg-white";
        let leftSection = document.createElement("div");
        leftSection.className = "flex items-center";
        let centerSection = document.createElement("div");
        centerSection.className = "flex justify-center items-center";
        let rightSection = document.createElement("div");
        rightSection.className = "flex justify-end items-center";
        buttonsContainer.append(leftSection);
        buttonsContainer.append(centerSection);
        buttonsContainer.append(rightSection);
        return buttonsContainer;
    }

    public buildLoadingContainer() {
        let loadingContainer = document.createElement('div');
        loadingContainer.className = "w-full h-full flex items-center justify-center";
        loadingContainer.style.display = 'none';
        let loadingCircleContainer = document.createElement('div');
        loadingCircleContainer.className = 'w-64 h-48 flex items-center justify-center rounded bg-white shadow';
        loadingCircleContainer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 text-gray-600 animate-spin"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>';
        loadingContainer.appendChild(loadingCircleContainer);
        return loadingContainer;
    }

    public buildBodyContainer() {
        let bodyContainer = document.createElement("div");
        bodyContainer.className =
            "w-full h-full mt-2 relative overflow-y-auto flex justify-center";
        bodyContainer.style.scrollBehavior = "smooth";
        return bodyContainer;
    }
}
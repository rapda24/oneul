/* 공통 컴포넌트 로드 함수 */
async function loadComponent(elementId, filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Failed to load ${filePath}: ${response.statusText}`);
        }
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;

        // 컴포넌트 로드 완료 이벤트 디스패치
        document.dispatchEvent(new CustomEvent('componentLoaded', { detail: elementId }));
    } catch (error) {
        console.error(`There was a problem loading ${filePath}:`, error);
    }
}

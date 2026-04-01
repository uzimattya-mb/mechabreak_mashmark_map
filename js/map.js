// マーカー定義（22個のGoldenBox）
// const markers = [
//     { id: 1, x: 16, y: 20, title: "GoldenBox_01", description: "GoldenBox_01 - ここは最初のポイントです", image: "images/details/detail-1.jpg" },
//     { id: 2, x: 23, y: 14, title: "GoldenBox_02", description: "GoldenBox_02 - 2番目のポイントです", image: "images/details/detail-2.jpg" },
//     { id: 3, x: 28, y: 28, title: "GoldenBox_03", description: "GoldenBox_03 - 3番目のポイントです", image: "images/details/detail-3.jpg" },
//     { id: 4, x: 12, y: 41, title: "GoldenBox_04", description: "GoldenBox_04 - 4番目のポイントです", image: "images/details/detail-4.jpg" },
//     { id: 5, x: 2, y: 55, title: "GoldenBox_05", description: "GoldenBox_05 - 5番目のポイントです", image: "images/details/detail-5.jpg" },
//     { id: 6, x: 14, y: 59, title: "GoldenBox_06", description: "GoldenBox_06 - 6番目のポイントです", image: "images/details/detail-6.jpg" },
//     { id: 7, x: 18, y: 67, title: "GoldenBox_07", description: "GoldenBox_07 - 7番目のポイントです", image: "images/details/detail-7.jpg" },
//     { id: 8, x: 25, y: 77, title: "GoldenBox_08", description: "GoldenBox_08 - 8番目のポイントです", image: "images/details/detail-8.jpg" },
//     { id: 9, x: 51, y: 82, title: "GoldenBox_09", description: "GoldenBox_09 - 9番目のポイントです", image: "images/details/detail-9.jpg" },
//     { id: 10, x: 73, y: 88, title: "GoldenBox_10", description: "GoldenBox_10 - 10番目のポイントです", image: "images/details/detail-10.jpg" },
//     { id: 11, x: 83, y: 86, title: "GoldenBox_11", description: "GoldenBox_11 - 11番目のポイントです", image: "images/details/detail-11.jpg" },
//     { id: 12, x: 90, y: 69, title: "GoldenBox_12", description: "GoldenBox_12 - 12番目のポイントです", image: "images/details/detail-12.jpg" },
//     { id: 13, x: 89, y: 39, title: "GoldenBox_13", description: "GoldenBox_13 - 13番目のポイントです", image: "images/details/detail-13.jpg" },
//     { id: 14, x: 92, y: 12, title: "GoldenBox_14", description: "GoldenBox_14 - 14番目のポイントです", image: "images/details/detail-14.jpg" },
//     { id: 15, x: 85, y: 24, title: "GoldenBox_15", description: "GoldenBox_15 - 15番目のポイントです", image: "images/details/detail-15.jpg" },
//     { id: 16, x: 79, y: 24, title: "GoldenBox_16", description: "GoldenBox_16 - 16番目のポイントです", image: "images/details/detail-16.jpg" },
//     { id: 17, x: 78, y: 19, title: "GoldenBox_17", description: "GoldenBox_17 - 17番目のポイントです", image: "images/details/detail-17.jpg" },
//     { id: 18, x: 71, y: 27, title: "GoldenBox_18", description: "GoldenBox_18 - 18番目のポイントです", image: "images/details/detail-18.jpg" },
//     { id: 19, x: 62, y: 16, title: "GoldenBox_19", description: "GoldenBox_19 - 19番目のポイントです", image: "images/details/detail-19.jpg" },
//     { id: 20, x: 57, y: 16, title: "GoldenBox_20", description: "GoldenBox_20 - 20番目のポイントです", image: "images/details/detail-20.jpg" },
//     { id: 21, x: 53, y: 5, title: "GoldenBox_21", description: "GoldenBox_21 - 21番目のポイントです", image: "images/details/detail-21.jpg" }
//     // { id: 22, x: 50, y: 40, title: "GoldenBox_22", description: "GoldenBox_22 - 22番目のポイントです", image: "images/details/detail-22.jpg" }
// ];

const markers = [
    { id: 1, x: 16, y: 20, title: "ダストロック基地", image: "images/details/detail-1.jpg" },
    { id: 2, x: 23, y: 14, title: "インパクト・ゾーン", image: "images/details/detail-2.jpg" },
    { id: 3, x: 28, y: 28, title: "サンドダスト庇護所（まだ画像なし）", image: "images/details/detail-3.jpg" },
    { id: 4, x: 12, y: 41, title: "太陽の岩", image: "images/details/detail-4.jpg" },
    { id: 5, x: 2, y: 55, title: "石湾基地", image: "images/details/detail-5.jpg" },
    { id: 6, x: 14, y: 59, title: "星の岩礁外", image: "images/details/detail-6.jpg" },
    { id: 7, x: 18, y: 67, title: "星の岩礁室内",image: "images/details/detail-7.jpg" },
    { id: 8, x: 25, y: 77, title: "廃工場", image: "images/details/detail-8.jpg" },
    { id: 9, x: 51, y: 82, title: "サウスウッド", image: "images/details/detail-9.jpg" },
    { id: 10, x: 73, y: 88, title: "南投空港", image: "images/details/detail-10.jpg" },
    { id: 11, x: 83, y: 86, title: "芯石精錬所（まだ画像なし）", image: "images/details/detail-11.jpg" },
    { id: 12, x: 90, y: 69, title: "鉄錆の波止場", image: "images/details/detail-12.jpg" },
    { id: 13, x: 89, y: 39, title: "日の出海岸", image: "images/details/detail-13.jpg" },
    { id: 14, x: 92, y: 12, title: "飛び坂の島", image: "images/details/detail-14.jpg" },
    { id: 15, x: 85, y: 24, title: "中継前哨基地（まだ画像なし）", image: "images/details/detail-15.jpg" },
    { id: 16, x: 79, y: 24, title: "中継前哨基地室内", image: "images/details/detail-16.jpg" },
    { id: 17, x: 78, y: 19, title: "中継前哨基地北側", image: "images/details/detail-17.jpg" },
    { id: 18, x: 71, y: 27, title: "中継前哨基地西側（まだ画像なし）", image: "images/details/detail-18.jpg" },
    { id: 19, x: 62, y: 16, title: "森の要塞東側（まだ画像なし）", image: "images/details/detail-19.jpg" },
    { id: 20, x: 57, y: 16, title: "森の要塞西側", image: "images/details/detail-20.jpg" },
    { id: 21, x: 53, y: 54, title: "巨大カルデラ（まだ画像なし）", image: "images/details/detail-21.jpg" }
    // { id: 22, x: 50, y: 40, title: "GoldenBox_22", image: "images/details/detail-22.jpg" }
];

// DOM要素取得
const markersContainer = document.getElementById('markersContainer');
const detailModal = document.getElementById('detailModal');
const closeBtn = document.querySelector('.close');
const baseMap = document.getElementById('baseMap');

// マーカー作成
function createMarkers() {
    markers.forEach(marker => {
        const markerElement = document.createElement('div');
        markerElement.className = 'marker';
        markerElement.style.left = marker.x + '%';
        markerElement.style.top = marker.y + '%';
        markerElement.textContent = marker.id;
        markerElement.addEventListener('click', () => showDetail(marker));
        markersContainer.appendChild(markerElement);
    });
}

// 詳細表示
function showDetail(marker) {
    document.getElementById('detailTitle').textContent = marker.title;
    document.getElementById('detailImage').src = marker.image;
    document.getElementById('detailDescription').textContent = marker.description;
    detailModal.style.display = 'block';
}

// モーダルを閉じる
function closeModal() {
    detailModal.style.display = 'none';
}

// イベントリスナー
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', (event) => {
    if (event.target === detailModal) {
        closeModal();
    }
});

// 初期化
document.addEventListener('DOMContentLoaded', createMarkers);
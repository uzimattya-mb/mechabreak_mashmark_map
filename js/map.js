// ゴールデンボックスマーカー
const goldenBoxMarkers = [
    { id: 1, x: 14, y: 18, title: "ダストロック基地", image: "images/details/detail-1.jpg" },
    { id: 2, x: 19, y: 11, title: "インパクト・ゾーン", image: "images/details/detail-2.jpg" },
    { id: 3, x: 28, y: 28, title: "サンドダスト庇護所（まだ画像なし）", image: "images/details/detail-3.jpg" },
    { id: 4, x: 10, y: 40, title: "太陽の岩", image: "images/details/detail-4.jpg" },
    { id: 5, x: 2, y: 55, title: "石湾基地", image: "images/details/detail-5.jpg" },
    { id: 6, x: 12, y: 58, title: "星の岩礁外", image: "images/details/detail-6.jpg" },
    { id: 7, x: 15, y: 65, title: "星の岩礁室内", image: "images/details/detail-7.jpg" },
    { id: 8, x: 23, y: 77, title: "廃工場", image: "images/details/detail-8.jpg" },
    { id: 9, x: 51, y: 83, title: "サウスウッド", image: "images/details/detail-9.jpg" },
    { id: 10, x: 74, y: 91, title: "南投空港", image: "images/details/detail-10.jpg" },
    { id: 11, x: 83, y: 86, title: "芯石精錬所", image: "images/details/detail-11.jpg" },
    { id: 12, x: 92, y: 69, title: "鉄錆の波止場", image: "images/details/detail-12.jpg" },
    { id: 13, x: 91, y: 39, title: "日の出海岸", image: "images/details/detail-13.jpg" },
    { id: 14, x: 94, y: 9, title: "飛び坂の島", image: "images/details/detail-14.jpg" },
    { id: 15, x: 86, y: 23, title: "中継前哨基地（まだ画像なし）", image: "images/details/detail-15.jpg" },
    { id: 16, x: 81, y: 21, title: "中継前哨基地室内", image: "images/details/detail-16.jpg" },
    { id: 17, x: 78, y: 16, title: "中継前哨基地北側", image: "images/details/detail-17.jpg" },
    { id: 20, x: 57, y: 14, title: "森の要塞", image: "images/details/detail-20.jpg" },
    { id: 21, x: 53, y: 53, title: "巨大カルデラ（まだ画像なし）", image: "images/details/detail-21.jpg" }
];

// RestrictedZoneKey1 マーカー（青）
const restrictedZoneKey1Markers = [
    { id: 'RZK1_1a', x: 26, y: 6, title: "輸送車護送", type: "rzk1", pair: "RZK1_1b" },
    { id: 'RZK1_1b', x: 62, y: 14, title: "輸送車護送", type: "rzk1", pair: "RZK1_1a" },
    { id: 'RZK1_2a', x: 10, y: 54, title: "ステルス30機撃破", type: "rzk1", pair: "RZK1_2b" },
    { id: 'RZK1_2b', x: 91, y: 12, title: "ステルス30機撃破", type: "rzk1", pair: "RZK1_2a" },
    { id: 'RZK1_3a', x: 15, y: 68, title: "EICタンク30個破壊", type: "rzk1", pair: "RZK1_3b" },
    { id: 'RZK1_3b', x: 85, y: 89, title: "EICタンク30個破壊", type: "rzk1", pair: "RZK1_3a" },
];

// RestrictedZoneKey2 マーカー（紫）
const restrictedZoneKey2Markers = [
    { id: 'RZK2_1a', x: 13, y: 11, title: "EICピットコア3基破壊", type: "rzk2", pair: "RZK2_1b" },
    { id: 'RZK2_1b', x: 40, y: 90, title: "EICピットコア3基破壊", type: "rzk2", pair: "RZK2_1a" },
    { id: 'RZK2_2a', x: 14, y: 86, title: "80機撃破", type: "rzk2", pair: "RZK2_2b" },
    { id: 'RZK2_2b', x: 56, y: 57, title: "80機撃破", type: "rzk2", pair: "RZK2_2a" },
    { id: 'RZK2_3a', x: 38, y: 73, title: "地層破壊マシン解体", type: "rzk2", pair: "RZK2_3b" },
    { id: 'RZK2_3b', x: 41, y: 21, title: "地層破壊マシン解体", type: "rzk2", pair: "RZK2_3a" },
    { id: 'RZK2_4a', x: 29, y: 66, title: "護衛艦5隻破壊", type: "rzk2", pair: "RZK2_4b" },
    { id: 'RZK2_4b', x: 90, y: 57, title: "護衛艦5隻破壊", type: "rzk2", pair: "RZK2_4a" },
];

// RestrictedZoneKey3 マーカー（黄色）
const restrictedZoneKey3Markers = [
    { id: 'RZK3_1a', x: 74, y: 87, title: "ヘルキャット", type: "rzk3", pair: "RZK3_1b" },
    { id: 'RZK3_1b', x: 78, y: 20, title: "ヘルキャット", type: "rzk3", pair: "RZK3_1a" },
    { id: 'RZK3_2a', x: 22, y: 83, title: "モレーナ", type: "rzk3", pair: "RZK3_2b" },
    { id: 'RZK3_2b', x: 86, y: 42, title: "モレーナ", type: "rzk3", pair: "RZK3_2a" },
];

// ON/OFF 管理
const markerVisibility = {
    goldenbox: true,
    rzk1: true,
    rzk2: true,
    rzk3: true,
};

// DOM 要素
const baseMap = document.getElementById('baseMap');
const markersContainer = document.getElementById('markersContainer');
const modal = document.getElementById('detailModal');
const detailTitle = document.getElementById('detailTitle');
const detailImage = document.getElementById('detailImage');
const detailDescription = document.getElementById('detailDescription');
const closeBtn = document.querySelector('.close');

// SVG キャンバス（点線用）
const svg = document.getElementById('connectionsSvg');

// マーカー作成
function createMarkers() {
    goldenBoxMarkers.forEach(marker => {
        createMarker(marker, 'goldenbox', '#FFD700');
    });

    restrictedZoneKey1Markers.forEach(marker => {
        createMarker(marker, 'rzk1', '#4A90E2');
    });

    restrictedZoneKey2Markers.forEach(marker => {
        createMarker(marker, 'rzk2', '#9B59B6');
    });

    restrictedZoneKey3Markers.forEach(marker => {
        createMarker(marker, 'rzk3', '#FFD700');
    });

    drawConnections();
}

// 個別マーカー作成（アイコン版）
function createMarker(marker, type, color) {
    const markerElement = document.createElement('div');
    markerElement.className = 'marker';
    markerElement.classList.add(`marker-${type}`);
    markerElement.style.left = marker.x + '%';
    markerElement.style.top = marker.y + '%';
    
    if (type.startsWith('rzk')) {
    // RZK用のアイコン画像を設定
    const iconMap = {
        'rzk1': 'images/rzk1-icon.png',
        'rzk2': 'images/rzk2-icon.png',
        'rzk3': 'images/rzk3-icon.png'
    };
    
    markerElement.style.backgroundImage = `url('${iconMap[type]}')`;
    markerElement.style.backgroundSize = 'contain';
    markerElement.style.backgroundRepeat = 'no-repeat';
    markerElement.style.backgroundPosition = 'center';
    markerElement.style.backgroundColor = 'transparent';
    markerElement.style.border = 'none';
    markerElement.textContent = '';
} else {
    // GoldenBox は宝箱アイコンを表示
    markerElement.style.backgroundImage = `url('images/goldenbox-icon.jpg')`;
    markerElement.style.backgroundSize = 'contain';
    markerElement.style.backgroundRepeat = 'no-repeat';
    markerElement.style.backgroundPosition = 'center';
    markerElement.style.backgroundColor = 'transparent';
    markerElement.style.border = 'none';
    markerElement.textContent = '';
}
    
    markerElement.dataset.type = type;
    markerElement.dataset.id = marker.id;

    markerElement.addEventListener('click', (e) => {
        e.stopPropagation();
        if (markerVisibility[type]) {
            showDetail(marker, type);
        }
    });

    markersContainer.appendChild(markerElement);
}

// 点線を描画
function drawConnections() {
    const allMarkers = [
        ...restrictedZoneKey1Markers,
        ...restrictedZoneKey2Markers,
        ...restrictedZoneKey3Markers,
    ];

    const drawnPairs = new Set();

    allMarkers.forEach(marker => {
        if (!marker.pair || drawnPairs.has(marker.id)) return;

        const pairMarker = allMarkers.find(m => m.id === marker.pair);
        if (!pairMarker) return;

        let color = '#FFD700';
        if (marker.type === 'rzk1') color = '#4A90E2';
        if (marker.type === 'rzk2') color = '#9B59B6';
        if (marker.type === 'rzk3') color = '#FFD700';

        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', marker.x + '%');
        line.setAttribute('y1', marker.y + '%');
        line.setAttribute('x2', pairMarker.x + '%');
        line.setAttribute('y2', pairMarker.y + '%');
        line.setAttribute('stroke', color);
        line.setAttribute('stroke-width', '2');
        line.setAttribute('stroke-dasharray', '5,5');
        line.classList.add(`line-${marker.type}`);
        line.dataset.type = marker.type;

        svg.appendChild(line);

        drawnPairs.add(marker.id);
        drawnPairs.add(pairMarker.id);
    });
}

// 詳細を表示
function showDetail(marker, type) {
    detailTitle.textContent = marker.title;
    detailImage.src = marker.image || `images/details/${marker.id}.jpg`;
    detailDescription.textContent = marker.description || '';
    modal.style.display = 'block';
}

// モーダルを閉じる
function closeModal() {
    modal.style.display = 'none';
}

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// ON/OFF 切り替え関数（修正版）
function toggleMarkerVisibility(type) {
    markerVisibility[type] = !markerVisibility[type];

    const button = document.querySelector(`.control-btn[data-type="${type}"]`);

    // マーカーの表示/非表示
    document.querySelectorAll(`.marker-${type}`).forEach(marker => {
        marker.style.display = markerVisibility[type] ? 'flex' : 'none';
    });

    // 点線の表示/非表示
    document.querySelectorAll(`.line-${type}`).forEach(line => {
        line.style.visibility = markerVisibility[type] ? 'visible' : 'hidden';
    });

    // ボタンのクラスを更新
    if (markerVisibility[type]) {
        button.classList.remove('off');
        button.classList.add('on');
    } else {
        button.classList.remove('on');
        button.classList.add('off');
    }
}

// ページロード時に実行
document.addEventListener('DOMContentLoaded', () => {
    createMarkers();

    // 初期状態：全て ON にする
    document.querySelectorAll('.control-btn').forEach(button => {
        button.classList.add('on');
    });
});
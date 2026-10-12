// 拡張機能がインストールされたときに実行されるイベントリスナー
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "searchText",
    title: "Search selected text on YouGlish",
    contexts: ["selection"]
  });
});

// コンテキストメニューの項目がクリックされたときに実行されるイベントリスナー
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "searchText") {
    searchTextOnYouGlish(info.selectionText);
  }
});

function searchTextOnYouGlish(rawText) {
  // 前後の空白を除き、連続する空白・改行を 1 つのスペースにまとめる
  const text = (rawText || "").replace(/\s+/g, " ").trim();
  if (!text) return;
  const url = `https://youglish.com/pronounce/${encodeURIComponent(text)}/english`;
  chrome.tabs.create({ url });
}
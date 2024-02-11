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
    const text = info.selectionText;
    searchTextOnYouGlish(text);
  }
});

function searchTextOnYouGlish(text) {
  const url = `https://youglish.com/pronounce/${encodeURIComponent(text)}/english?`;
  chrome.tabs.create({ url });
}
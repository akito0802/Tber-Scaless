
document.getElementById("genre-select").addEventListener("change", function () {
  const genre = this.value;
  const scaleSelect = document.getElementById("scale-select");
  scaleSelect.innerHTML = "";

  if (genre === "major") {
    scaleSelect.innerHTML = `
      <option value="major">メジャー</option>
      <option value="pentatonic">ペンタ</option>
      <option value="blues">ブルース</option>
    `;
  } else if (genre === "minor") {
    scaleSelect.innerHTML = `
      <option value="natural">ナチュラル</option>
      <option value="melodic">メロディック</option>
      <option value="harmonic">ハーモニック</option>
      <option value="pentatonic">ペンタ</option>
      <option value="blues">ブルース</option>
    `;
  } else if (genre === "mode") {
    scaleSelect.innerHTML = `
      <option value="ionian">アイオニアン</option>
      <option value="dorian">ドリアン</option>
      <option value="phrygian">フリジアン</option>
      <option value="lydian">リディアン</option>
      <option value="mixolydian">ミクソリディアン</option>
      <option value="aeolian">エオリアン</option>
      <option value="locrian">ロクリアン</option>
    `;
  }
});

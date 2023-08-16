@section('footer')
    @extends('layout.footer')
@endsection


@extends('layout.base')



@section('konten')
    
    <div id="popup" class="popup">
        <div class="popup-content">
          <button id="closePopupButton">ed</button>
            <h2 id="37">Popup Contest</h2>
        </div>
    </div>

    <div id="popup2" class="popup">
      <div id="data" class="popup-content">
        <button id="tutup">Close</button>
          <h2 id="hist">
            <ul id="sejarah">
              ra
            </ul>
          </h2>
      </div>
  </div>
    
  <div class="slide">
    <button onclick="prev()"><</button>


    <div id="bg" style="background-image: url('https://api.genshin.dev/characters/albedo/gacha-splash');" class="slide-item">


      <table border="0" style="width:100%">
        <tr>
          <td id="bannername" style="width: 60%">ALBEDO</td>
          <td></td>
          <td style="width: 200px; height: 200px; overflow: auto;">
            <img id="banner41" style="height: 80%" src="https://api.genshin.dev/characters/beidou/gacha-splash" alt="">
          </td>
          <tr>
            <td></td>
            <td style="width: 200px; height: 200px; overflow: auto;">
              <img id="banner42" style="height: 80%;" src="https://api.genshin.dev/characters/diona/gacha-splash" alt="">
            </td>
            <td style="width: 200px; height: 200px; overflow: auto;">
              <img id="banner43" style="height: 80%;" src="https://api.genshin.dev/characters/sucrose/gacha-splash" alt="">
            </td>
          </tr>
        </tr>
      </table>


    </div>


    <button onclick="next()">></button>
  </div>
@endsection



@section('navbar')
    @extends('layout.navbar')
@endsection



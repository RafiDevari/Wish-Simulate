@section('footer')
    @extends('layout.footer')
@endsection


@extends('layout.base')



@section('konten')
    
    <div id="popup" class="popup">
        <div class="popup-content">
            <h2 id="37">Popup Contest</h2>
        </div>
    </div>

    <div id="popup2" class="popup">
      <div id="data" class="popup-content">
        <button id="close">Close</button>
          <h2 id="hist">
            <ul id="sejarah">
              
            </ul>
          </h2>
      </div>
  </div>
    
  <div class="slide">
    <button onclick="prev()"><</button>
    <div class="slide-item">
      <img id="slide" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/560px-PNG_transparency_demonstration_1.png" alt="">
    </div>
    <button onclick="next()">></button>
  </div>
@endsection



@section('navbar')
    @extends('layout.navbar')
@endsection



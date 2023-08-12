@section('footer')
    @extends('layout.footer')
@endsection


@extends('layout.base')



@section('konten')
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



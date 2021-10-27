let
  nixpkgs = import <nixpkgs> { };
in
with nixpkgs;
nixpkgs.mkShell {
  buildInputs = [
    imagemagick
    yarn
    ];
  }

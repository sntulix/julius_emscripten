#!/bin/bash -x
# gcc 8 is used in this tutorial, other versions may fail

LDFLAGS="$CFLAGS -s INITIAL_MEMORY=33554432" # 33554432 bytes = 32 MB
ARGS=(
    --target-os=none
    --arch=x86_32
    --enable-cross-compile
    --disable-x86asm
    --disable-pthreads
    --disable-inline-asm
    --disable-stripping 
    --extra-ldflags="$LDFLAGS"
    --nm="llvm-nm"
    --ar=emar
    --ranlib=emranlib
    --cc=emcc
    --cxx=em++
    --objcc=emcc
    --dep-cc=emcc
    )

EMCONFIGURE_JS=1 emconfigure ./configure "${ARGS[@]}"

# build ffmpeg.wasm
emmake make -j4

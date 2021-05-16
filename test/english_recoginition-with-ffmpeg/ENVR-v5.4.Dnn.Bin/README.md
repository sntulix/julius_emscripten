# Description

HMM GMM Binary English speech models (262K dictionary, 32 bit LM)

To use these models you need a modified version of Julius from:
https://github.com/palles77/julius

You can use a precompiled version of Julius for Windows experiments 'julius-dnn.exe' (you might need to install latest VC REDIST x86 version from https://support.microsoft.com/en-gb/help/2977003/the-latest-supported-visual-c-downloads). Otherwise you need to download source code from the address above (https://github.com/palles77/julius), configure it and compile it using either VS 2017 or GCC.

When compiling using GCC you can do it for example as:
$ bash configure --enable-words-int --enable-sp-segment
$ make all
$ make install

# How to run

julius-dnn -C julius.jconf -dnnconf dnn.jconf > julius-dnn-output.txt

Note that:
1. This compilation has WORDS_INT precompiler directive set as 1 (which enables 32 bit based Language Models).
2. A special directive DNN is set to 1 in libsent/include/sent/stddefs.h to enable compatibility with DNN HTK based acoustic models MFCC features calculation.

# Files in this directory

dnn.jconf                     - DNN config file
ENVR-v5.3.am                  - 16 Gaussians general triphone model, 32 gaussians silence model, binary format
ENVR-v5.3.dct                 - dictionary
ENVR-v5.3.layer2_bias.npy     - layer 2 bias
ENVR-v5.3.layer2_weight.npy   - layer 2 weights
ENVR-v5.3.layer3_bias.npy     - layer 3 bias
ENVR-v5.3.layer3_weight.npy   - layer 3 weights
ENVR-v5.3.layer4_bias.npy     - layer 4 bias
ENVR-v5.3.layer4_weight.npy   - layer 4 weights
ENVR-v5.3.layer5_bias.npy     - layer 5 bias
ENVR-v5.3.layer5_weight.npy   - layer 5 weights
ENVR-v5.3.layer6_bias.npy     - layer 6 bias
ENVR-v5.3.layer6_weight.npy   - layer 6 weights
ENVR-v5.3.layerout_bias.npy   - output layer bias
ENVR-v5.3.layerout_weight.npy - output layer weights
ENVR-v5.3.lm                  - binary language model
ENVR-v5.3.mfc                 - mfc standardisation data
ENVR-v5.3.norm                - normalisation data 
ENVR-v5.3.phn                 - binary phones list
ENVR-v5.3.prior               - probabilities of output layer for calculating phone classification
julius-dnn-output.txt         - sample decoding output
julius-dnn.exe                - executable modified Julius compiled for Windows
julius.jconf                  - julius configuration
mozilla.wav                   - sample wave file
README.md                     - this file
test.dbl                      - list of files to decode
wav_config                    - input file format for decoding (MFCC config data)

# Additional info

A detailed documentation can be obtained from Julius decoder home page
https://github.com/julius-speech/julius

File format accepted is 16kHz, RIFF WAV PCM 16bit, mono, signed integer.
Decoded file can be changed by editing list.dbl

The sample file is borrowed from Mozilla Open Source English DataSet:
https://blog.mozilla.org/blog/2017/11/29/announcing-the-initial-release-of-mozillas-open-source-speech-recognition-model-and-voice-dataset/

# Licence
https://en.wikipedia.org/wiki/Mozilla_Public_License

# Contact
silesiaresearch at gmail dot com

# Copyright (c) 1991-2013 Kawahara Lab., Kyoto University
# Copyright (c) 1997-2000 Information-technology Promotion Agency, Japan
# Copyright (c) 2000-2005 Shikano Lab., Nara Institute of Science and Technology
# Copyright (c) 2005-2013 Julius project team, Nagoya Institute of Technology
# All rights reserved

#
# $Id: Makefile.in,v 1.11 2013/06/20 17:14:18 sumomo Exp $
#
SHELL=/bin/sh
.SUFFIXES:
.SUFFIXES: .c .o
.c.o:
	$(CC) $(CFLAGS) $(CPPFLAGS) -o $@ -c $<

LIBSENT=../../libsent
LIBJULIUS=../../libjulius
CC=/home/takahiro/ドキュメント/ソース/emscripten/emcc
CFLAGS= -O3 -s ASYNCIFY=1 -s EXIT_RUNTIME=1 -s ALLOW_MEMORY_GROWTH=1 -s WASM_MEM_MAX=2097152000 -s ERROR_ON_UNDEFINED_SYMBOLS=0 -s EXPORT_ALL=1 -s "EXPORTED_FUNCTIONS=['_file_uploaded']" -s "EXTRA_EXPORTED_RUNTIME_METHODS=['ccall']" -s FORCE_FILESYSTEM=1 --preload-file julius.jconf --preload-file wav_config --preload-file dnn.jconf --preload-file ENVR-v5.3.dct --preload-file ENVR-v5.3.lm --preload-file ENVR-v5.3.am --preload-file ENVR-v5.3.phn --preload-file test.dbl --preload-file ENVR-v5.3.layer2_bias.npy --preload-file ENVR-v5.3.layer2_weight.npy --preload-file ENVR-v5.3.layer3_bias.npy --preload-file ENVR-v5.3.layer3_weight.npy --preload-file ENVR-v5.3.layer4_bias.npy --preload-file ENVR-v5.3.layer4_weight.npy --preload-file ENVR-v5.3.layer5_bias.npy --preload-file ENVR-v5.3.layer5_weight.npy --preload-file ENVR-v5.3.layer6_bias.npy --preload-file ENVR-v5.3.layer6_weight.npy --preload-file ENVR-v5.3.layerout_bias.npy --preload-file ENVR-v5.3.layerout_weight.npy --preload-file ENVR-v5.3.prior --preload-file ENVR-v5.3.norm
CPPFLAGS= -I. -I$(LIBJULIUS)/include -I$(LIBSENT)/include  `$(LIBSENT)/libsent-config --cflags` `$(LIBJULIUS)/libjulius-config --cflags`
LDFLAGS= -L$(LIBJULIUS) `$(LIBJULIUS)/libjulius-config --libs` -L$(LIBSENT) `$(LIBSENT)/libsent-config --libs` 
GTK_CFLAGS=
GTK_LIBS=
RM=/bin/rm -f

## install
prefix=/usr/local
exec_prefix=${prefix}
bindir=${exec_prefix}/bin
libdir=${exec_prefix}/lib
includedir=${prefix}/include
mandir=${prefix}/share/man
INSTALL=/usr/bin/install -c
INSTALL_DATA=${INSTALL} -m 644
INSTALL_PROGRAM=${INSTALL}

############################################################

TARGET = index.js
INSTALLTARGET = julius

OBJ = \
main.o \
recogloop.o \
module.o \
output_module.o \
output_stdout.o \
output_file.o \
record.o \
charconv.o charconv_iconv.o

############################################################

all: $(TARGET)

$(TARGET): $(LIBSENT)/libsent.a $(LIBJULIUS)/libjulius.a $(OBJ)
	$(CC) $(CFLAGS) $(CPPFLAGS) -o bin/$@ $(OBJ) $(LDFLAGS) $(GTK_LIBS)

############################################################

install: install.bin

install.bin: $(TARGET)
	${INSTALL} -d ${exec_prefix}/bin
	${INSTALL_PROGRAM} $(TARGET) ${bindir}/${INSTALLTARGET}

depend:
	makedepend -- $(CFLAGS) -- $(OBJSENT)

smallclean:
	$(RM) *.o

clean:
#	$(RM) *.o *.bak *~ core TAGS
	$(RM) $(OBJ)
	$(RM) *.bak *~ core TAGS
	$(RM) config.log config.cache
	$(RM) $(TARGET) $(INSTALLTARGET)
	$(RM) $(TARGET).exe $(INSTALLTARGET).exe

distclean:
#	$(RM) *.o *.bak *~ core TAGS
	$(RM) $(OBJ)
	$(RM) *.bak *~ core TAGS
	$(RM) config.log config.cache
	$(RM) $(TARGET) $(INSTALLTARGET)
	$(RM) $(TARGET).exe $(INSTALLTARGET).exe
	$(RM) config.status config.h
	$(RM) Makefile

############################################################
configure:
	autoconf
	$(RM) config.h.in
	autoheader

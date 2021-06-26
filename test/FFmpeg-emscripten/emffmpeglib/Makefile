for_web: ffmpeg.o
	emcc -o ffmpeg_convert_wav.html ffmpeg.o ../fftools/cmdutils.c ../fftools/ffmpeg_opt.c ../fftools/ffmpeg_hw.c ../fftools/ffmpeg_filter.c ../libavcodec/libavcodec.a ../libavutil/libavutil.a ../libavformat/libavformat.a ../libavfilter/libavfilter.a ../libavdevice/libavdevice.a ../libswresample/libswresample.a ../libswscale/libswscale.a -I../ -I../fftools -s INITIAL_MEMORY=1677721600 -s EXIT_RUNTIME=1

for_node: ffmpeg.o
	emcc -o test ffmpeg.o ../fftools/cmdutils.c ../fftools/ffmpeg_opt.c ../fftools/ffmpeg_hw.c ../fftools/ffmpeg_filter.c ../libavcodec/libavcodec.a ../libavutil/libavutil.a ../libavformat/libavformat.a ../libavfilter/libavfilter.a ../libavdevice/libavdevice.a ../libswresample/libswresample.a ../libswscale/libswscale.a -I../ -I../fftools -s INITIAL_MEMORY=1677721600 -s EXIT_RUNTIME=1  --bind -lnodefs.js

ffmpeg.o: ffmpeg.c
	emcc ffmpeg.c -c -I../ -I../libavformat -I../fftools

clean:
	rm *.o
	rm test

for f in *.JPG; do
    [ -e "${f%.*}.HEIC" ] && echo rm -- "$f"
done

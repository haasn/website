# Makefile for building CV PDFs
# Builds both versions: without photo ($(OUTPUT_STANDARD)) and with photo ($(OUTPUT_PHOTO))

LATEX = xelatex
SOURCE = niklas_haas_cv.tex
OUTPUT_STANDARD = niklas_haas_cv.pdf
OUTPUT_PHOTO = niklas_haas_cv_photo.pdf

.PHONY: all clean standard photo

# Default target: build both versions
all: standard photo

# Build standard version (without photo)
standard: $(OUTPUT_STANDARD)

$(OUTPUT_STANDARD): $(SOURCE)
	$(LATEX) -jobname=niklas_haas_cv "\def\nophoto{}\input{$(SOURCE)}"

# Build version with photo
photo: $(OUTPUT_PHOTO)

$(OUTPUT_PHOTO): $(SOURCE) photo.jpg
	$(LATEX) -jobname=niklas_haas_cv_photo $(SOURCE)

# Clean auxiliary files
clean:
	rm -f *.aux *.log *.out *.toc *.lof *.lot *.fls *.fdb_latexmk *.synctex.gz *.bbl *.blg

# Clean everything including PDFs
distclean: clean
	rm -f $(OUTPUT_STANDARD) $(OUTPUT_PHOTO)

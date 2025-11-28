# Makefile for building CV PDFs
# Builds both versions: with photo (niklas_haas_cv.pdf) and without photo (cv_nophoto.pdf)

LATEX = xelatex
SOURCE = niklas_haas_cv.tex
OUTPUT_STANDARD = niklas_haas_cv.pdf
OUTPUT_NOPHOTO = cv_nophoto.pdf

.PHONY: all clean standard nophoto

# Default target: build both versions
all: standard nophoto

# Build standard version (with photo)
standard: $(OUTPUT_STANDARD)

$(OUTPUT_STANDARD): $(SOURCE) photo.jpg
	$(LATEX) $(SOURCE)

# Build version without photo
nophoto: $(OUTPUT_NOPHOTO)

$(OUTPUT_NOPHOTO): $(SOURCE)
	$(LATEX) -jobname=cv_nophoto "\def\nophoto{}\input{$(SOURCE)}"

# Clean auxiliary files
clean:
	rm -f *.aux *.log *.out *.toc *.lof *.lot *.fls *.fdb_latexmk *.synctex.gz *.bbl *.blg

# Clean everything including PDFs
distclean: clean
	rm -f $(OUTPUT_STANDARD) $(OUTPUT_NOPHOTO)

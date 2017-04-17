<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output
    method="html"
    encoding="UTF-8"
    indend="yes" >
  </xsl:output>

  <xsl:template match="/">
    <!-- Pour obtenir un document html5, on inscrit en dur la ligne "<!DOCTYPE html>"-->
    <xsl:text disable-output-escaping='yes'>&lt;!DOCTYPE html&gt;</xsl:text>

    <html>
      <head>
        <title>Les fonctions d'appel</title>
      </head>

      <body>
        <h1>Test de call-template</h1>

        <xsl:for-each select="repertoire/personne">
          <xsl:call-template name="afficherNom">
            <xsl:with-param name="nom" select="nom" />
          </xsl:call-template>
        </xsl:for-each>

      </body>
    </html>

  </xsl:template>

  <!--Template de séléction de nom-->
  <xsl:template name="afficherNom">
    <!-- Récéption des paramètres-->
    <xsl:param name="constante">Nom de la personne : </xsl:param>
    <xsl:param name="nom" />

      <xsl:call-template name="createElement">
        <xsl:with-param name="element">p</xsl:with-param>
        <xsl:with-param name="contenu"><xsl:value-of select="$nom" /></xsl:with-param>
      </xsl:call-template>
      <!-- <xsl:value-of select="$constante" /><xsl:value-of select="$nom" /> -->
  </xsl:template>

  <xsl:template name="createElement">
    <xsl:param name="element"/>
    <xsl:param name="contenu" />

    <xsl:comment>Voici un paragraphe</xsl:comment>
    <xsl:element name="{$element}">
      <xsl:attribute name="style">background-color:red;width:10%</xsl:attribute>
      <xsl:value-of select="$contenu" />
    </xsl:element>
  </xsl:template>

</xsl:stylesheet>

# JuliusAI Data Sources

This folder contains the raw data files and documentation needed for the JuliusAI fruit import search functionality.

## Data Files

### HTS Fruit Data
- **`htsdata-fruit.json`** - Complete Harmonized Tariff Schedule fruit data in JSON format
- **`htsdata-fruit.csv`** - Same data in CSV format for spreadsheet analysis
- **`htsdata-fruit.xlsx`** - Excel format for easy viewing and manipulation

### Documentation
- **`hts_external_user_guide.pdf`** - Official USITC HTS API user guide and documentation

## Data Structure

The fruit data contains the following key fields:

- **`htsno`** - HTS (Harmonized Tariff Schedule) number/code
- **`indent`** - Hierarchical level in the classification system
- **`description`** - Product description (e.g., "Coconuts:", "Desiccated", "In shell")
- **`units`** - Unit of quantity (e.g., "kg" for kilograms)
- **`general`** - General rate of duty (e.g., "Free", "7.7¢/kg")
- **`special`** - Special rate of duty for specific countries
- **`other`** - Additional duty rates (e.g., "7.7¢/kg")
- **`footnotes`** - Additional notes and references
- **`quotaQuantity`** - Quota restrictions if applicable
- **`additionalDuties`** - Additional duty information

## API Integration

### USITC REST API
- **Base URL**: `https://hts.usitc.gov/reststop/search`
- **Fruit Search Endpoint**: `https://hts.usitc.gov/reststop/search?keyword=fruit`
- **Export Endpoint**: `https://hts.usitc.gov/export`
- **Documentation**: See `hts_external_user_guide.pdf` for complete API reference

### Fruit HTS Code Range
- **Applicable Codes**: 0801.00.0000 to 0814.99.9999
- **Chapter 08**: Edible fruit and nuts; peel of citrus fruit or melons
- **Coverage**: All fruit-related HTS classifications fall within this range

### API Usage
The USITC API provides real-time access to HTS data and can be used to:
- Search for specific fruit-related HTS codes
- Get updated tariff rates and descriptions
- Access additional product information
- Validate local data against official sources

## File Formats

### JSON Format
- **Structure**: Array of objects with nested properties
- **Use Case**: Web applications, API responses, data processing
- **Advantages**: Hierarchical structure, supports complex data types

### CSV Format
- **Structure**: Tabular data with comma-separated values
- **Use Case**: Spreadsheet analysis, data import/export
- **Advantages**: Human-readable, compatible with Excel and other tools

### Excel Format
- **Structure**: Spreadsheet with multiple sheets and formatting
- **Use Case**: Data analysis, reporting, presentation
- **Advantages**: Rich formatting, multiple sheets, easy visualization

## Data Usage Guidelines

1. **Local Data Store**: Use the JSON file for client-side applications
2. **API Integration**: Combine local data with real-time API calls for updates
3. **Data Validation**: Cross-reference local data with API responses
4. **Performance**: Cache API responses to reduce server load
5. **Updates**: Regularly sync with USITC API for latest tariff information

## Implementation Notes

- All data is client-side accessible (no authentication required)
- JSON format is recommended for web applications
- CSV format is useful for data analysis and reporting
- API provides real-time updates and additional product details
- Data includes hierarchical structure for proper classification display

## Support

For technical questions about the data structure or API integration, refer to:
- `hts_external_user_guide.pdf` - Official USITC documentation
- [USITC HTS Website](https://hts.usitc.gov/) - Official HTS information
- [USITC Export Endpoint](https://hts.usitc.gov/export) - Data export functionality
- Challenge requirements in `/CHALLENGE.md` - Project specifications
